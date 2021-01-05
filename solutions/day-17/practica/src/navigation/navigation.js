import React from 'react'
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'

const Home = () => (<h1>Home</h1>)
const Bienvenido = () => (<h1>Bienvenido</h1>)
const Productos = () => (<h1>Productos</h1>)

const Tiendas = () => (<h1>Tiendas</h1>)
const Contacto = () => (<h1>Contacto</h1>)
const Beneficios = () => (<h1>Beneficios</h1>)

const Navbar = () =>{
    return(
        <header>
            <Link to="/">Home</Link>
            <Link to="/bienvenido/" >Bienvenido</Link>
            <Link to ="/producto">Producto</Link>
        </header>
    )
}


const Footerbar = () =>{
    return(
        <header>
            <NavLink exact to='/tiendas' 
            activeStyle={{color:'orangered'}} 
            isActive={(match, location)=>{
                console.log(match)
                if(!match) {return false}
                return !match.isExact
            }}>
            Tiendas</NavLink>
            <NavLink to='/contacto' activeStyle={{color:'orangered'}}>Contacto</NavLink>
            <NavLink to='/beneficios' activeClassName='navActive'>Beneficios</NavLink>
        </header>
    )
}

export const NavLinkTag = () => {
    return(
        <Router>
            <Footerbar />
            <Route path="/tiendas/:id?" exact component={Tiendas} />
            <Route path="/beneficios" exact component={Beneficios}/>
            <Route path="/contacto" exact component ={Contacto} />
        </Router>
    )
}



export class Navigation extends React.Component {
    render(){
        return(
            <Router>
                <Navbar />
                <Route path='/' exact component={Home} />
                <Route path='/bienvenido/' strict render = {Bienvenido} />
                <Route path='/producto' sensitive >
                    <Productos />
                </Route>
            </Router>
        )
    }
}

