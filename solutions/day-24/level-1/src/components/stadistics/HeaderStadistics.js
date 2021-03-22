import React,{useState} from 'react'


const HeaderStadistics = ({toggleValue}) => {
    const [toggle, setToggle] = useState(true)
    const mostPopulated='populated country'
    const spokenLanguage = 'spoken language'

    const togglePopulation = () => {
        setToggle(true)
    }

     const toggleLanguage = () => {
        setToggle(false)
    }

    return(
        <div className="stadistics-buttons">
            <button onClick={togglePopulation}>Population</button>
            <button onClick={toggleLanguage}>Language</button>
            <p className="stadistic-button-description">10 Most {toggle ? mostPopulated : spokenLanguage} in the world</p>
        </div>
    )
}

export default HeaderStadistics