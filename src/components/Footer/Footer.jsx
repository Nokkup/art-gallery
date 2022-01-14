import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <span className={styles.footer__year}>2021</span>
            <a className={styles.footer__link} href="https://github.com/Nokkup/art-gallery">Github link</a>
        </div>
    );
}

export default Footer;