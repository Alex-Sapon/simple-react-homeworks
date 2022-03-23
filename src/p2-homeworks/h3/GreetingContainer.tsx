import React, {useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3';

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.currentTarget.value.replace(/[^a-zа-яё]/gi, ''))
        setError('')
    }

    const addUser = () => {
        if (name) {
            addUserCallback(name)
            setName('')
            alert(`Hello  ${name}!`)
        } else {
            setError('Name is require!')
        }
    }

    const onKeyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        event.key === 'Enter' && addUser()
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyPressHandler={onKeyPressHandler}
            setError={setError}
        />
    )
}

export default GreetingContainer
