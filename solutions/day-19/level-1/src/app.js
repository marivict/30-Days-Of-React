import React,{Component} from 'react'
import Header from './header'
import Cats from './components/cats'
import Loader from './components/loader'
import './css/style.css'


class App extends Component {
  
  state ={
    breeds:[],
    loading: true
  }

  componentDidMount () {
    const url = 'https://api.thecatapi.com/v1/breeds' 
    fetch(url)
    .then((res) => (res.json()))
    .then(breeds => this.setState({breeds, loading:false}))
  }

  render() {
    const {breeds} = this.state
    if(this.state.loading){
      return(<Loader />)
    }

    const catsBreeds = breeds.map(breed=>{
      return(
        <Cats breeds={breed} />
      )
    })
    return (
      <div>
        <Header breeds={breeds} />   
        <main>{catsBreeds}</main>     
      </div>
    )
  }
}



export default App 