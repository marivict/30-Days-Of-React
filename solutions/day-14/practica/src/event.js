import React from 'react'

class Event extends React.Component {

    state={
        width: window.innerWidth
    }

    componentDidMount(){
        window.addEventListener('resize', this.handlerResize)
    }

    handlerResize = () =>{
        this.setState({width:window.innerWidth})
    }

    render(){
        return(
            <div>
                <h2>Events: {this.state.width}</h2>
            </div>
        )
    }
}

export default Event