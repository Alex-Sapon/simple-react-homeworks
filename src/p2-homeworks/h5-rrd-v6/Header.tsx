import React, {FC} from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import arrow from './img/arrow.png'

const Header: FC = () => {
    const setActiveClass = (navData: {isActive: boolean}): string => navData.isActive ? styles.link_active : styles.link_default

    return (
        <nav className={`${styles.nav_wrapper}`}>
            <ul className={styles.links}>
                <li><NavLink to={'/pre-junior'} className={setActiveClass}>PreJunior</NavLink></li>
                <li><NavLink to={'/junior'} className={setActiveClass}>Junior</NavLink></li>
                <li><NavLink to={'/junior-upper'} className={setActiveClass}>Junior+</NavLink></li>
            </ul>
            <div className={styles.nav_arrow}>
                <img src={arrow} alt="arrow" />
            </div>
        </nav>
    )
}

export default Header
