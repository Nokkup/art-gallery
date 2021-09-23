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
                res.data.tags && (information.tags = res.data.tags.map(el => el.term));
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
                <img className={styles.popup__image} src={description.imageSmallSize} alt={description.title}></img>
                {
                    description.title &&
                    <p className={styles.popup__content__title}>{description.title}</p>
                }
                {
                    description.author &&
                    <p className={styles.popup__content__author}>{description.author}</p>
                }
                {
                    description.years &&
                    <p className={styles.popup__content__years}>{description.years}</p>
                }
                {
                    description.wiki &&
                    <p>
                        <a
                            className={styles.popup__content__url}
                            href={description.wiki}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Wikidata Page
                        </a>
                    </p>
                }
                {
                    description.imageFullSize &&
                    <p>
                        <a
                            className={styles.popup__content__url}
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
                    description.tags.map((tag, i) => <span className={styles.popup__content__tag} key={i}>{tag}</span>)
                }
                {
                    Object.keys(description).some(el => description[el])
                        ? null
                        : <p className={styles.popup__content__info}>No information about this item</p>
                }
            </Popup>
        </>
    )

}

export default GalleryCard;