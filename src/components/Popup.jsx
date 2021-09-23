import styles from "../styles/Popup.module.scss";

const Popup = ({ isActive, setActive, children }) => {

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            setActive(false);
        }
    }

    return (
        isActive &&
        <div className={styles.popup} onClick={() => setActive(false)}>
            <div className={styles.popup__body}>
                <div className={styles.popup__content} onClick={e => e.stopPropagation()}>
                    <span
                        className={styles.popup__close}
                        onClick={() => setActive(false)}
                        onKeyDown={handleKeyPress}
                        tabIndex={3}
                    >
                        ×
                    </span>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Popup;