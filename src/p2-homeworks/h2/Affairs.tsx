import React, {MouseEventHandler} from 'react'
import Affair from './Affair'
import {AffairPriorityType, FilterType} from './HW2'

export type AffairType = {
    id: number,
    name: string,
    priority: AffairPriorityType
}

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (name: FilterType) => void
    deleteAffairCallback: (id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((t: AffairType) => (
        <Affair // should work
            key={t.id}// кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            id={t.id}
            affair={t.name}
            priority={t.priority}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div>

            {mappedAffairs}

            <button onClick={setAll}>All</button>
            <button onClick={setHigh}>High</button>
            <button onClick={setMiddle}>Middle</button>
            <button onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
