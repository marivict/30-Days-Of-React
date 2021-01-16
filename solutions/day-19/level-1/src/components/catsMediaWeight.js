import React from 'react'

const CatsMediaWeight = ({breeds}) => {
  const cats = breeds.map(breed => {
    const weightcat = breed.weight.metric.split("-").map(item =>(parseInt(item, 10)))
    const mediaweightcat = weightcat.reduce((a,b) => (a + b)/weightcat.length)    
    return mediaweightcat 
  })
  const totalWeight = cats.reduce((a,b) => (a + b))/cats.length
  return(
    <>
      {totalWeight.toFixed(1)}
    </>
  )
  
}



export default CatsMediaWeight