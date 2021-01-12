import React,{Component} from 'react'
import Header from './header'
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
      return(<div className="loading"><h1>Loading</h1></div>)
    }
    return (
      <div>
        <Header breeds={breeds} />        
      </div>
    )
  }
}



export default App 