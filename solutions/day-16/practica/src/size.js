import React, {Component} from 'react'

const withSize = (Comp) => class extends Component{
    state = {
        width: window.innerWidth, 
        height: window.innerHeight
    }

    componentDidMount () {
        window.addEventListener('resize', this.handleResize)
    }

    handleResize = () =>{
        this.setState(
            {
                width: window.innerWidth, 
                height: window.innerHeight
            }
        )
    }
    render(){
        const {width, height} = this.state
        return(
            <Comp 
                width={width}
                height={height}
            />
        )
    }
}



class Appsize extends Component {
    render(){
        const {width, height} = this.props
        return(
            <div>
                {width} - {height}
            </div>
        )
    }
}

export default withSize(Appsize)