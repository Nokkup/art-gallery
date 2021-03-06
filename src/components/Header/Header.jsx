import styles from "./Header.module.scss";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__logo}>
                <a href="https://github.com/Nokkup/art-gallery" tabIndex={-1}>
                    <img src="logo.svg" alt="logo" />
                </a>
            </div>
            <h1 className={styles.header__title}>The Metropolitan Museum of Art Collection</h1>
        </div>
    )
}

export default Header;