import React,{useState} from 'react'

const Header = () => {
    return(
        <div>
            <h1>Header</h1>
        </div>
    )
}

const Button = () => {
    const [isActive, setActive] =useState(false)

    const handleClick = () => {
        setActive(!isActive)
    }

    return(
        <div>
            {isActive && <Header />}
            <button onClick={handleClick}>
                {isActive ? "Desactivar" : "Activar"}
            </button>
        </div>
    )
}

export default Button