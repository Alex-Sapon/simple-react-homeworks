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

function Affairs({data, setFilter, deleteAffairCallback}: AffairsPropsType) {
    const mappedAffairs = data.map((a: AffairType) => (
        <Affair key={a._id} affair={a} deleteAffairCallback={deleteAffairCallback}/>
    ))

    const setAll = () => setFilter('all')
    const setHigh = () => setFilter('high')
    const setMiddle = () => setFilter('middle')
    const setLow = () => setFilter('low')

    return (
        <div className={styles.todo_container}>
            <div className={styles.todo_item}>
                <SuperButton className={styles.button} onClick={setAll}>All</SuperButton>
                <SuperButton className={styles.button} onClick={setHigh}>High</SuperButton>
                <SuperButton className={styles.button} onClick={setMiddle}>Middle</SuperButton>
                <SuperButton className={styles.button} onClick={setLow}>Low</SuperButton>
            </div>
            {mappedAffairs}
        </div>
    )
}

export default Affairs
