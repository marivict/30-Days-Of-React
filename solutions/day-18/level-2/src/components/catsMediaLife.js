import React from 'react'

const CatsMediaLife= ({breeds}) => {
  const cats = breeds.map(breed => {
    const lifecat = breed.life_span.split("-").map(item =>(parseInt(item, 10)))
    const medialifecat = lifecat.reduce((a,b) => (a + b)/lifecat.length)    
    return medialifecat 
  })
  const totalLife = cats.reduce((a,b) => (a + b))/cats.length
  return(
    <>
      {totalLife.toFixed(1)}
    </>
  )
  
}



export default CatsMediaLife