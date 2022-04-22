import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import styles from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => clearInterval(timerId)

    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => setShow(true)
    const onMouseLeave = () => setShow(false)

    const setZero = (num: number) => num < 10 ? `0${num}` : num

    const stringTime = `${setZero(date.getHours())}.${setZero(date.getMinutes())}.${setZero(date.getSeconds())}`
    const stringDate = `${setZero(date.getDate())}.${setZero(date.getMonth() + 1)}.${date.getFullYear()}`

    return (
        <div>
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={styles.time}>{stringTime}</div>
            {show && (<div className={styles.date}>{stringDate}</div>)}
            <SuperButton onClick={start} className={styles.button}>start</SuperButton>
            <SuperButton onClick={stop} className={styles.button}>stop</SuperButton>
        </div>
    )
}

export default Clock
