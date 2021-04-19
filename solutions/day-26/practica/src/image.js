import React, {useContext} from 'react'
import Button from './button'
import {ThemeContext} from './app'

const Image = () =>{
    const context = useContext(ThemeContext)
    return(
        <div className={`background background-${context.day}`}>
            <div className={`sphere sphere-${context.day}`}></div>
            <Button toggle={context.toggle} day={context.day} />
        </div>
    )
}

export default Image