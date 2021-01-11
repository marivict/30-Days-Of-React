import React,{useState} from 'react'

const Changer = () => {
    const url = 'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg'

    const [image, setImage] = useState(url)

    const changeImage = () => {
        const catUrl = 'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg' 
        const dogUrl = 'https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg'
        
        const result = image === catUrl ? dogUrl : catUrl

        setImage(result)
    }

    return (
        <div>
            <img src={image} alt='imagen' />
            <button onClick={changeImage}>Change</button>
        </div>
    )
}
export default Changer