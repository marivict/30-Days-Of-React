import React,{Component} from 'react'
import CatsMetrics from './cats'

class App extends Component {
  constructor(){
    super()
    
  }
  state ={
    breeds:[]
  }
  componentDidMount () {
    const url = 'https://api.thecatapi.com/v1/breeds' 
    fetch(url)
    .then((res) => (res.json()))
    .then(breeds => this.setState({breeds}))
  }

  
  calculateCatWeight = () =>{
    let cache = 0
    let i = 0

    {this.state.breeds.map(breed => {
      let weightcat = breed.weight.metric.split("-").map(item =>(parseInt(item, 10)))
      let mediaweightcat = weightcat.reduce((a,b) => a + b)/weightcat.length

      cache =+ mediaweightcat
      console.log("total",cache)
      
      return (<p>{mediaweightcat}</p>)
      
    })}
  }
  render() {
    return (
      <div>
        <h1>Cats</h1>
          {this.calculateCatWeight()}
      </div>
    )
  }
}



export default App 