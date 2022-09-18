import React from 'react'
import s from './Message.module.css'


type MessageType = {
    avatar: string
    name: string,
    message: string,
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={s.all}>
        <div className={s.avatar}> <img src={props.avatar}/>
            <div className={s.notall}>
            <div className={s.name}> {props.name} </div>
            <div className={s.message}>   {props.message} </div>
            </div>
            <div className={s.time}> {props.time} </div>

        </div>
</div>

    )
}

export default Message
