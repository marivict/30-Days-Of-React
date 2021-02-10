import React from 'react'
import Population from './Population'
import Stadistics from './Stadistics'
import Menu from './Menu'

const Wrapper = ({countries}) => {

    const totalPopulation = countries.map((country) => {
        return country.population
    }).reduce((acumulator, country)=>{
        return acumulator + country
    })

    
    const graphlistPopulation = countries.slice(0, 10).map((country) => {
        return <Population country={country} total={totalPopulation } />
    })

    const sortedPopulation = graphlistPopulation.sort((a,b)=>{
        return b - a
    })

    return(
        <div class='stadistics'>
            <div className='stadistics-container'>
                <div className='stadistics-wrapper'>
                    <div className='stadistics-wrapper-inner'>
                        <Stadistics name='World' population={totalPopulation} total={totalPopulation} />
                        {graphlistPopulation}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wrapper