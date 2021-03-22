import React from 'react'

// Components
import Stadistics from './Stadistics'

const Population = ({countries}) =>{

  // Get total Population
  const getTotalPopulationSum = countries.map((country) => {
      return country.population
  }).reduce((acumulator, country)=>{
        return acumulator + country
  })

  const populationListSorted = () => {
    
  const arrayCountry = []

  //Add the countries inside an array
  countries.map(country => {
    arrayCountry.push(country)
  })

  //  Sort the countries from highest to lower
  const compare = (a, b) =>{
    const populationA = a.population
    const populationB = b.population
    let comparison = 0
    if (populationA < populationB) {
      comparison = 1
    }else if(populationA > populationB){
      comparison = -1
    }
    return comparison 
  }

    const sortedArray = arrayCountry.sort(compare)
    return sortedArray
  }

//  Reduce the countries to 10
  const populationList = populationListSorted().slice(0, 10).map((country) => {
     return <Stadistics 
              key={country.name}
              name={country.name} 
              population={country.population} 
              total={getTotalPopulationSum}/>
  })

  return( 
        <>
          <Stadistics name='World' population={getTotalPopulationSum} total={getTotalPopulationSum} />
          {populationList}
        </>
  )
}

export default Population