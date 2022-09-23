import React, {useState} from 'react'
import Affairs, {AffairType} from './Affairs'

// types
export type AffairPriorityType = 'high' | 'low' | 'middle'

export type FilterType = 'all' | AffairPriorityType


// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {id: 1, name: 'React', priority: 'high'},
    {id: 2, name: 'anime', priority: 'low'},
    {id: 3, name: 'games', priority: 'low'},
    {id: 4, name: 'work', priority: 'high'},
    {id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // need to fix any
    if (filter === 'all') return affairs
    if (filter === 'high') return affairs.filter(t => t.priority === 'high')
    if (filter === 'low') return affairs.filter(t => t.priority === 'low')
    if (filter === 'middle') return affairs.filter(t => t.priority === 'middle')
    return affairs
}
export const deleteAffair = (affairs: Array<AffairType>, id: number): any => { // need to fix any
    return affairs.filter(t => t.id !== id)
}


function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (id: number) => setAffairs(deleteAffair(affairs, id)) // need to fix any

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
