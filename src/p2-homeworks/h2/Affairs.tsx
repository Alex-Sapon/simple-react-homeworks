import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import styles from './Affairs.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type AffairsPropsType = {
    data: AffairType[]
    setFilter: (value: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}// кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter('all')}
    const setHigh = () => {props.setFilter('high')}
    const setMiddle = () => {props.setFilter('middle')}
    const setLow = () => {props.setFilter('low')}

    return (
        <div className={styles.todo}>
            <div className={styles.todoContainer}>
                <SuperButton className={styles.button} onClick={setAll}>All</SuperButton>
                <SuperButton className={styles.button} onClick={setHigh}>High</SuperButton>
                <SuperButton className={styles.button} onClick={setMiddle}>Middle</SuperButton>
                <SuperButton className={styles.button} onClick={setLow}>Low</SuperButton>

                {/*<button className={styles.button} onClick={setAll}>All</button>*/}
                {/*<button className={styles.button} onClick={setHigh}>High</button>*/}
                {/*<button className={styles.button} onClick={setMiddle}>Middle</button>*/}
                {/*<button className={styles.button} onClick={setLow}>Low</button>*/}
            </div>
            {mappedAffairs}
        </div>
    )
}

export default Affairs
