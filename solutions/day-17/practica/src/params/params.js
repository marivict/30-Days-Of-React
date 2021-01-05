import React from 'react'
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'


const Tiendas = () => (<h1>Tiendas</h1>)
const Contacto = () => (<h1>Contacto</h1>)
const Beneficios = () => (<h1>Beneficios</h1>)

const TiendasCategoria = ({match}) => {
   return(
       <div>
           {console.log({match})}
           <h1>Categoría: {match.params.categoria}</h1>
       </div>
   )
}


const Bar = () =>{
    return(
        <header>
            <NavLink exact to='/tiendas' 
                activeStyle={{color:'orangered'}}
            >
            Tiendas</NavLink>
            <NavLink to='/contacto' activeStyle={{color:'orangered'}}>Contacto</NavLink>
            <NavLink to='/beneficios' activeStyle={{color:'orangered'}}>Beneficios</NavLink>
        </header>
    )
}

export const Params= () => {
    return(
        <Router>
            <Bar />
            <Route path="/tiendas" exact component={Tiendas} />
            <Route path="/tiendas/:categoria/:id?" exact component={TiendasCategoria} />
            <Route path="/beneficios" exact component={Beneficios}/>
            <Route path="/contacto" exact component ={Contacto} />
        </Router>
    )
}


