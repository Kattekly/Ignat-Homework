import React from 'react'

type AffairPropsType = {
    id: number
    affair: string
    priority: string
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (id: number) => {
        props.deleteAffairCallback(id)
    }


    return (
        <div>
            <span>{props.affair + " "}</span>
            <span>{props.priority}</span>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
