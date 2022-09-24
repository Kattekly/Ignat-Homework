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
            <img src={props.avatar} className={s.avatar}/>

            <div className={s.ygol}/>

            <div className={s.content}>
                <div className={s.name}> {props.name} </div>
                <div className={s.message}> {props.message} </div>
                <div className={s.time}> {props.time} </div>
            </div>
        </div>
    )
}

export default Message
