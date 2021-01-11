import React,{useState, useEffect} from 'react'

const Effect = () => {
    const url = 'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg'

    const [image, setImage] = useState(url)
    const [counter, setCounter] = useState(0)

    const changeImage = () => {
        const catUrl = 'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg' 
        const dogUrl = 'https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg'
        
        const result = image === catUrl ? dogUrl : catUrl

        setImage(result)
    }

    

    const handleClick = () => {
        setCounter(counter + 2)
    }

    useEffect(()=>{
        alert("useEffect")
        
    },[])

    return (
        <div>
            <img src={image} alt='imagen' />
            <button onClick={changeImage}>Change</button>
            <button onClick={handleClick}>Aumentar({counter})</button>
        </div>
    )
}
export default Effect