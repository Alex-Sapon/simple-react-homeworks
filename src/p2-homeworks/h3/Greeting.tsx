import React from 'react'
import s from './Greeting.module.css'
import {UserType} from './HW3';
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type GreetingPropsType = {
    name: string
    setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    onKeyPressHandler: (event: React.KeyboardEvent<HTMLInputElement>) => void
    setError?: (type: string) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler, setError}
) => {
    const inputClass = error ? s.error : s.active

    const onBlurHandler = () => {
        setError && setError('')
    }

    return (
        <div className={s.wrapper}>
            <SuperInputText
                value={name}
                onKeyPress={onKeyPressHandler}
                onChange={setNameCallback}
                className={`${s.input} ${inputClass}`}
                onBlur={onBlurHandler}
            />

            {/*<input*/}
            {/*    value={name}*/}
            {/*    onKeyPress={onKeyPressHandler}*/}
            {/*    onChange={setNameCallback}*/}
            {/*    className={`${s.input} ${inputClass}`}/>*/}

            <span className={s.error_block}>{error}</span>
            <SuperButton className={s.button} onClick={addUser}>add</SuperButton>
            {/*<button className={s.button} onClick={addUser}>add</button>*/}
            <span className={s.counter}>Users: {totalUsers}</span>
        </div>
    )
}

export default Greeting
