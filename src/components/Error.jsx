import React from 'react'
import styles from "../styles/Error.module.scss";

const Error = () => {
    return (
        <div className={styles.main}>
            <div className={styles.error}>
                <p className={styles.error__message}>:( Ooops, something went wrong</p>
            </div>
        </div>
    )
}

export default Error;