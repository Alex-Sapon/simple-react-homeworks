import React from 'react'

export type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageDataType) {
    return (
        <div>
            <img src={props.avatar} alt=""/>
            <p>{props.name}</p>
            <p>{props.message}</p>
            <div>{props.time}</div>
        </div>
    )
}

export default Message
