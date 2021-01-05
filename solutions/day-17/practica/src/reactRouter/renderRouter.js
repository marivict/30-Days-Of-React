import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

const Home = () => (<h1>Home</h1>)
const Bienvenido = () => (<h1>Bienvenido</h1>)
const Productos = () => (<h1>Productos</h1>)

class RenderRouter extends React.Component {
    render(){
        return(
            <Router>
                <Route path='/' exact component={Home} />
                <Route path='/bienvenido/' strict render = {Bienvenido} />
                <Route path='/producto' sensitive >
                    {({match}) => {
                        console.log(match)
                        if(match) return <Productos />

                        return(
                            <h1>Woops no se ha encontrado la pagina</h1>
                        )
                        
                    }}
                </Route>
            </Router>
        )
    }
}

export default RenderRouter