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
    {
        name, setNameCallback, addUser, error,
        totalUsers, onKeyPressHandler, setError
    }) => {

    const inputClass = error ? s.error : s.active
    const onBlurHandler = () => setError && setError('')

    return (
        <div className={s.wrapper}>
            <div className={s.input}>
                <SuperInputText
                    error={error}
                    value={name}
                    onKeyPress={onKeyPressHandler}
                    onChange={setNameCallback}
                    className={inputClass}
                    onBlur={onBlurHandler}
                />
            </div>
            <SuperButton className={s.button} onClick={addUser}>add</SuperButton>
            <span className={s.counter}>Users: {totalUsers}</span>
        </div>
    )
}

export default Greeting
