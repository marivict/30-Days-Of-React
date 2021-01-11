import React,{Component} from 'react'

// Home Component



class Request extends Component {
  state = {
    users:[],
    cargando: true
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').
    then((res) =>(res.json())).
    then(users => this.setState({users, cargando:false})).
    catch(error => {
      //Manejador de error
    })
  }
 
  render() {
    if(this.state.cargando){
      return(<h1>Cargando</h1>)
    }
    return (
      <div>
        <ul>
          {this.state.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    )
  }
}



export default Request 