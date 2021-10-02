import { useEffect, useState } from "react";
import API from "../api/api";
import styles from "../styles/GalleryCard.module.scss";
import Popup from "./Popup";

const GalleryCard = ({ id }) => {
    const [description, setDescription] = useState({});
    const [isActive, setActive] = useState(false);

    useEffect(() => {
        let information = {};
        API.get(`/objects/${id}`)
            .then(res => {
                information.imageSmallSize = res.data.primaryImageSmall;
                information.imageFullSize = res.data.primaryImage;
                information.author = res.data.artistDisplayName;
                information.title = res.data.title;
                information.wiki = res.data.artistWikidata_URL;
                
                if (res.data.objectBeginDate !== res.data.objectEndDate) {
                    information.years = `${res.data.objectBeginDate} — ${res.data.objectEndDate}`;
                }
                else {
                    information.years = res.data.objectBeginDate;
                }
                information.tags = res.data.tags?.map(el => el.term) || [];
                setDescription(information);
            })
    }, [id])

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            setActive(true);
        }
    }

    return (
        <>
            <img
                className={styles.gallery__card}
                src={description.imageSmallSize}
                alt={description.title}
                onClick={() => setActive(true)}
                onKeyDown={handleKeyPress}
                tabIndex={3}
            >
            </img>

            <Popup isActive={isActive} setActive={setActive}>
                <div className={styles.gallery__popup__card}>
                <figure>
                    <img 
                        className={styles.gallery__popup__image} 
                        src={description.imageSmallSize} 
                        alt={description.title} 
                    />
                    <figcaption>
                        <p className={styles.gallery__popup__title}>{description.title || "unknown"}</p>
                        <p className={styles.gallery__popup__author}>{description.author || "unknown"}</p>
                        <p className={styles.gallery__popup__years}>{description.years || "undated"}</p>
                    </figcaption>
                {
                    description.wiki &&
                    <p>
                        <a
                            className={styles.gallery__popup__url}
                            href={description.wiki}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Wiki Page
                        </a>
                    </p>
                }
                {
                    description.imageFullSize &&
                    <p>
                        <a
                            className={styles.gallery__popup__url}
                            href={description.imageFullSize}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Full size
                        </a>
                    </p>
                }
                {
                    description.tags &&
                    description.tags.map((tag, i) => <span className={styles.gallery__popup__tag} key={i}>{tag}</span>)
                }
                </figure>
                </div>
            </Popup>
        </>
    )

}

export default GalleryCard;