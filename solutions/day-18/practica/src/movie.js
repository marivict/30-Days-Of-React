import React,{Component} from 'react'

// Home Component



class Movie extends Component {
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
    fetch(url + '&t=' + title)
    .then(res => res.json())
    .then(movies => this.setState({movies, cargando:false}))
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



export default Movie