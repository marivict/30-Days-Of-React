import React from 'react'

const Stadistics = ({name, population, total}) => {
    return(
        <div className='stadistics-item'>
            <label className='country-name'>{name}</label>
            <progress className='country-bar' id="file" value={population} max={total}>32%</progress>
            <div className='country-value'>{population.toLocaleString('en')}</div>
        </div>
    )
}

export default Stadistics