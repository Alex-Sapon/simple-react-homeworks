import React from 'react'
import styles from './Message.module.css';

type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageDataType) {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={props.avatar} alt=""/>
            <p className={styles.title}>{props.name}</p>
            <p className={styles.text}>{props.message}</p>
            <div className={styles.time}>{props.time}</div>
        </div>
    )
}

export default Message
