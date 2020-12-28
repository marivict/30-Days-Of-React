import React from 'react'

class ReactConstructor extends React.Component {
    constructor(props){
        super(props)

        this.agregar = this.agregar.bind(this)

        this.state = {
            num: this.props.num
        }
    }

    agregar () {
        this.setState(state => ({
            num: state.num + 1
        }))
    }

    render(){
        return(
            <div>
                <h1>Metodos de vida</h1>
                <button onClick={this.agregar}>Clicks({this.state.num})</button>
            </div>
        )
    }
}

export default ReactConstructor