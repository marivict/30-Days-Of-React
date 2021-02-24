import React from 'react'

// Components
import Stadistics from './Stadistics'

const Population = ({countries}) =>{

// Add all the population
const countryPopulation = []

const totalPopulation = countries.map((country) => {
  countryPopulation.push(country.population)
  countryPopulation.reduce((previousScore, currentScore) =>previousScore+currentScore,0)

  return  <Stadistics name={country.name} population={country.population} total={countryPopulation}/>
})


// const reduceFuntion = totalPopulation.reduce((previousScore, currentScore) =>previousScore+currentScore,0)

  return( 
        <>
          <Stadistics name='World' population={totalPopulation} total={totalPopulation} />
          {totalPopulation}
        </>
  )
}

export default Population