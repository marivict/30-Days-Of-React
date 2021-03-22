import React,{useState} from 'react'
// components
import Menu from '../Menu/Menu'
import Population from './Population'
import Buttons from '../Buttons/Buttons'
import Languages from './Languages'


const Wrapper = ({countries}) => {
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
        <div className='stadistics' id='graph'>
        <div className="stadistics-buttons">
            <button onClick={togglePopulation}>Population</button>
            <button onClick={toggleLanguage}>Language</button>
            <p className="stadistic-button-description">10 Most {toggle ? mostPopulated : spokenLanguage} in the world</p>
        </div>

            <div className='stadistics-container'>
                <div className='stadistics-wrapper'>
                    <div className='stadistics-wrapper-inner'>
                        {toggle ? <Population countries={countries} /> : <Languages countries={countries}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wrapper