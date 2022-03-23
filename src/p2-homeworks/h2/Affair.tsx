import React from 'react'
import {AffairType} from './HW2';
import styles from './Affair.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

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
                <SuperButton className={styles.button} onClick={deleteCallback}>x</SuperButton>

                {/*<button className={styles.button} onClick={deleteCallback}>X</button>*/}
            </li>
        </ul>
    )
}

export default Affair
