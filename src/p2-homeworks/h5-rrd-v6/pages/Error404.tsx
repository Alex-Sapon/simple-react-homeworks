import React from 'react'
import styles from './Error404.module.css'

function Error404() {
    return (
        <div className={styles.error_container}>
            <div className={styles.error_status}>404</div>
            <div className={styles.error_text}>Page not found!</div>
            <div className={styles.error_img}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    )
}

export default Error404
