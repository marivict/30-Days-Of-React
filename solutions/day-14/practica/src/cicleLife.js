import React from 'react';


class CicleLife extends React.Component {
    constructor(){
        super()
    }

    state = {
        foo: false
    }

    componentDidMount(){
        // Runs after the first render() lifecycle
        // solicitudes http
        // Agregar Event Listener
        console.log("Lifecycle ComponentDidMount()", this.state.foo)
        this.setState({foo: !this.state.foo})
    }

    render(){
        console.log('Render lifecycle', this.state.foo)
        return <h1>Hello</h1>
    }
}

export default CicleLife