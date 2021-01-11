import React,{Component} from 'react'

const CatsMetrics = ({cats:{weight, life_span}}) => {
  const weightcat = weight.metric.split("-").map(item =>(parseInt(item, 10)))
  const mediaweightcat = weightcat.reduce((a,b) => a + b)/weightcat.length
  
  const lifeSpan = life_span
  return(
    <div>
      <p>Weight:{mediaweightcat}</p>
      <p>Life:{}</p>
    </div>
  )
  
}



export default CatsMetrics