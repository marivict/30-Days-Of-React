import React from 'react'

const Buttons = ({toggleinfo}) => {
    const toggle = (toggleinfo) =>{
        const change = toggleinfo
        alert(change)
    }
    return(
        <button onClick={toggle}>Population</button>
    )
}

export default Buttons