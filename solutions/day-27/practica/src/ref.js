import React,{useRef} from 'react'

const GetTheReference = () => {
    const entrada = useRef()

    const focus = () => entrada.current.focus()
    const blur = () => entrada.current.blur()
    return(
        <div>
            <input
                type="text"
                placeholder="Ingresa un valor"
                ref={entrada}
            />
            <button onClick={focus}>Focus</button>
            <button onClick={blur}>Blur</button>
        </div>
    )
}

export default GetTheReference