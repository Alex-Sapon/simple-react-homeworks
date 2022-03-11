import React from 'react'
import {AffairType} from './HW2';
import styles from './Affair.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => props.deleteAffairCallback(props.affair._id)

    return (
        <ul className={styles.item}>
            <li className={styles.wrapper}>
                <span className={styles.title}>{props.affair.name}</span>
                <span className={styles.subtitle}>{props.affair.priority}</span>
                <button className={styles.button} onClick={deleteCallback}>X</button>
            </li>
        </ul>
    )
}

export default Affair
