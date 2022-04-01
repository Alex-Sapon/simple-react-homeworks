import React, {FC} from 'react'
import {NavLink} from 'react-router-dom'
import styles from './Header.module.css'
import {PATH} from './Pages'

const Header: FC = () => {
    const setFinalClasses = (navData: { isActive: boolean }): string => navData.isActive ? styles.active : styles.link

    return (
        <div className={styles.nav_container}>
            <nav className={styles.nav_wrapper}>
                <NavLink to={PATH.PRE_JUNIOR} className={setFinalClasses}>PreJunior</NavLink>
                <NavLink to={PATH.JUNIOR} className={setFinalClasses}>Junior</NavLink>
                <NavLink to={PATH.JUNIOR_UPPER} className={setFinalClasses}>Junior+</NavLink>
            </nav>
        </div>

    )
}

export default Header
