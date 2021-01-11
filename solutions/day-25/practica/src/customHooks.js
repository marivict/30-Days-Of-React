import React,{useState, useEffect} from 'react'
const useSize = () =>{
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    const handleSize = () =>{
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    useEffect(()=>{
        window.addEventListener('resize', handleSize)
    }, [])
    return{
        width, 
        height
    }
}
const CustomHooks = () => {
    const{width, height} =useSize()
    return(
        <div>
            <h1>Width:{width} Height: {height}</h1>
        </div>
    )
}


export default CustomHooks