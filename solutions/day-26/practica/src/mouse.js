import React,{useState, useEffect} from 'react'

const MousePosition = () => {
    const [mousex, setMousex] = useState(0)
    const [mousey, setMousey] = useState(0)

    const handleMouse = (e) => {
        setMousex(e.clientX)
        setMousey(e.clientY)
    }

    useEffect(()=>{
        window.addEventListener('mousemove', handleMouse)
        return() => {
            window.removeEventListener('mousemove', handleMouse )
        }
    })

    return(
        <div>
            <h1>X:{mousex} Y: {mousey}</h1>
        </div>
    )
}

export default MousePosition