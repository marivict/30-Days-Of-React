import React from 'react'

// Components
import Stadistics from './Stadistics'

const Population = ({countries}) =>{

// Add all the population
  const totalPopulation = countries.map((country) => {
     return country.population
  }).reduce((acumulator, country)=>{
        return acumulator + country
  })

//  Reduce the countries to 10
  const graphlistPopulation = countries.slice(0, 10).map((country) => {
     return <Stadistics name={country.name} population={country.population} total={totalPopulation}/>
  })

//  Sort the countries from highest to lower
  const sortedPopulation = graphlistPopulation.sort((a,b)=>{
      return b - a
  })

  return( 
        <>
          <Stadistics name='World' population={totalPopulation} total={totalPopulation} />
          {graphlistPopulation}
        </>
  )
}

export default Population