import React from 'react'

class InputControlado extends React.Component {

  state = {
    firstName: ''
  }
  handleChange = (e) => {
    const value = e.target.value
    this.setState({firstName: value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('firstname:', this.state.firstName)
  }
  render(){
    const firstName = this.state.firstName
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        <input type = 'text' name="firstname" value={firstName} onChange={this.handleChange} />
        <input type='submit' onClick = {this.handleClick}/>
        </form>
      </div>
    )
  }
}

class InputNoControlado extends React.Component {
  nombre = React.createRef()
  email = React.createRef()

  handleClick = () => {
    const nombre = this.nombre.current.value
    const email = this.email.current.value
    console.log(nombre, email)
    this.props.onSend({nombre, email})
  }


  render(){
    return(
      <div>
        <input
           type="text"
           ref={this.nombre}
           placeholder = 'Nombre'
        />
        <input
           type="text"
           ref={this.email}
           placeholder = 'Nombre'
        />
        <input 
          type="submit" 
          onClick={this.handleClick} />
      </div>
    )
  }
}

class InputNoControlado2 extends React.Component {

  handleSubmit = (e) => {
    const nombre = e.target[0].value
    const email = e.target[1].value
    console.log(nombre, email)
    this.props.onSend({nombre, email})
    e.preventDefault();
  }


  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input
           type="text"
           placeholder = 'Nombre'
        />
        <input
           type="text"
           placeholder = 'Nombre'
        />
        <input 
          type="submit" />
      </form>
    )
  }
}

class App extends React.Component {
  send = (data) =>{
    console.log(data)
  }

  render(){
    return(
      // <InputNoControlado
      //   onSend = {this.send}
      //   />
      <InputNoControlado2 onSend = {this.send} />
    )
  }
}

export default App 