import styles from "./Popup.module.scss";

const Popup = ({ isActive, setActive, children }) => {
    return (
        isActive && (
            <div className={styles.popup} onClick={() => setActive(false)}>
                <div className={styles.popup__body}>
                    <div
                        className={styles.popup__content}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <span
                            className={styles.popup__close}
                            onClick={() => setActive(false)}
                        >
                            ×
                        </span>
                        {children}
                    </div>
                </div>
            </div>
        )
    );
};

export default Popup;
