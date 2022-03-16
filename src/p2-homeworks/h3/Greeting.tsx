import React from 'react'
import s from './Greeting.module.css'
import {UserType} from './HW3';

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onKeyPressHandler: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler}
) => {
    const inputClass = error ? s.error : s.active // need to fix with (?:)

    return (
        <div className={s.wrapper}>
            <input
                value={name}
                onKeyPress={onKeyPressHandler}
                onChange={setNameCallback}
                className={`${s.input} ${inputClass}`}/>
            <span className={s.error_block}>{error}</span>
            <button className={s.button} onClick={addUser}>add</button>
            <span className={s.counter}>Users: {totalUsers}</span>
        </div>
    )
}

export default Greeting
