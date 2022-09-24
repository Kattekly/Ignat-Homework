import React, {MouseEventHandler} from 'react'
import s from './Affairs.module.css'
import style from './Affairs.module.css'

type AffairPropsType = {
    id: number
    affair: string
    priority: string
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.id)
    }
    const priorityColor = props.priority === 'high'
        ? style.high : props.priority === 'middle' ? style.middle
            : props.priority === 'low' ? style.low : ''
    return (
        <div className={s.why}>
            <span className={priorityColor}>{props.affair}</span>
            <span className={priorityColor}>{props.priority}</span>
            <button onClick = {deleteCallback} className={s.del}>X</button>
        </div>
    )
}

export default Affair
