import React from 'react'

const ItemListContainer = ({greeting}) => {
    return (
        <div className='greetingDiv'>
            <h2 className='greetingH2'>{greeting}</h2>
            <img src="../../assets/MIDI.svg" alt="" />
        </div>
    )
}

export default ItemListContainer
