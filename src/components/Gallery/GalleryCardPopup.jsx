import React from 'react';
import Popup from '../Popup/Popup';
import styles from "./GalleryCard.module.scss";

const GalleryCardPopup = ({description, isActive, setActive}) => {
    return (
        <Popup isActive={isActive} setActive={setActive}>
        <div className={styles.gallery__popup__card}>
            <figure>
                <img
                    className={styles.gallery__popup__image}
                    src={description.imageSmallSize}
                    alt={description.title}
                />
                <figcaption>
                    <p className={styles.gallery__popup__title}>
                        {description.title}
                    </p>
                    <p className={styles.gallery__popup__author}>
                        {description.author}
                    </p>
                    <p className={styles.gallery__popup__years}>
                        {description.years}
                    </p>
                </figcaption>
                {description.wiki && (
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
                )}
                {description.imageFullSize && (
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
                )}
                {description.tags &&
                    description.tags.map((tag, i) => (
                        <span
                            className={styles.gallery__popup__tag}
                            key={i}
                        >
                            {tag}
                        </span>
                    ))}
            </figure>
        </div>
    </Popup>
    )
}

export default GalleryCardPopup;
