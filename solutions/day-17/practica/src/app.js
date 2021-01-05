import React,{Component} from 'react'
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom'

// Home Component

const Home = (props) => <h1>Welcome Home</h1>
const About = (props) => <h1>About Us</h1>
const Contact = (props) => <h1>Contact Us</h1>
const Challenge = (props) => <div><h1>30 Days Of React Challenge</h1></div>
const NotFound = (props) => <h1>Page not found</h1>

const Welcome = ({handleClick, isLogged}) =>(
  <div>
    {isLogged ? 'Welcome to the challenge': <p>Please login in </p>}
    <button onClick={handleClick}>{isLogged ? 'Log Out' : 'Log In'}</button>
  </div>
)

const Navbar = () => (
  <ul>
    <li>
      <NavLink to='/'>Home</NavLink>
    </li>
    <li>
      <NavLink to='/about'>About Us</NavLink>
    </li>
    <li>
      <NavLink to='/contact'>Contac</NavLink>
    </li>
    <li>
      <NavLink to='/challenge'>Challenge</NavLink>
    </li>
  </ul>
)

class App extends Component {

  state = {
    isLogged: false
  }

  handleClick = () =>{
    this.setState({
      isLogged: !this.state.isLogged
    })

    console.log(this.state.isLogged)
  }
  render() {
    return (
      <Router>
        <div className='App'>
          {//exact attribute
           //strict attribute
          }
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact strict path='/about' component={About} />
            <Route exact strict path='/contact' >
              <Contact />
            </Route>
            <Route exact strict path='/challenge' component={Challenge} />
            <Route path='/login' component={(props) => (<Welcome {...props} isLogged={this.state.isLogged} handleClick= {this.handleClick} />)} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
      
    )
  }
}



export default App 