import { useEffect, useState } from "react";
import { fetchImageInfo } from "../../api/api";
import styles from "./GalleryCard.module.scss";
import GalleryCardPopup from "./GalleryCardPopup";

const GalleryCard = ({ id }) => {
    const [description, setDescription] = useState({});
    const [isActive, setActive] = useState(false);

    useEffect(() => {
        async function fetchInfo() {
            const info = await fetchImageInfo(id);
            setDescription(info);
        }
        fetchInfo();
    }, [id]);

    const handleKeyPress = (e) => {
        if (e.code === "Space") {
            setActive(true);
        } else if (e.code === "Escape") {
            setActive(false);
        }
    };

    return (
        <>
            <img
                className={styles.gallery__card}
                src={description.imageSmallSize}
                alt={description.title}
                onClick={() => setActive(true)}
                onKeyDown={handleKeyPress}
                tabIndex={0}
            />
            {isActive && (
                <GalleryCardPopup
                    description={description}
                    isActive={isActive}
                    setActive={setActive}
                />
            )}
        </>
    );
};

export default GalleryCard;
