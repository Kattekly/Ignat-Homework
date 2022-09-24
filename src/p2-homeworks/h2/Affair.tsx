import React, {MouseEventHandler} from 'react'
import s from './Affairs.module.css'

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

    return (
        <div className={s.why}>
            <span>{props.affair}</span>
            <span className={s.aaa}>{props.priority}</span>
            <button onClick = {deleteCallback} className={s.del}>X</button>
        </div>
    )
}

export default Affair
