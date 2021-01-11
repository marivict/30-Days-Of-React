import React,{Component} from 'react'
import axios from 'axios'

// Home Component



class MovieAxios extends Component {
  state = {
    movies : {},
    cargando: false
  }
  componentDidMount(){

  }

  handleSubmit = (e) =>{
    e.preventDefault()
    this.setState({cargando: true})
    const title = e.target[0].value
    const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=5451fdd4' 
    axios.get(url,{
      params: {
        t: title
      }
    })
    .then(res => this.setState({movies: res.data, cargando:false}))
  }
 
  render() {
    const {movies, cargando} = this.state
    return (
      <div>
        <form onSubmit ={this.handleSubmit}>
          <input type='text' />
          <input type='submit' />
        </form>
        {cargando && (
          <h1>Cargando...</h1>
        )}
        {movies.Title && !cargando && (
          <div>
            <h1>{movies.Title}</h1>
            <p>{movies.Plot}</p>
            <img src={movies.Poster} alt='Poster' />
          </div>
        )}
        

      </div>
    )
  }
}



export default MovieAxios