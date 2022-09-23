import React from 'react'

type AffairPropsType = {
    // key не нужно типизировать
    affair: any // need to fix any
    deleteAffairCallback: any // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = props.deleteAffairCallback


    return (
        <div>
            // show some text

            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
