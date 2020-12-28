import React from 'react'

class Contador extends React.Component {
    state = {
        num: 0
    }

    shouldComponentUpdate(nextProps, nextState){
        // console.log(
        //     'shouldComponentUpdate',
        //     this.state,
        //     nextState
        // )

        if(nextState.num <= 5){
            return true
        }
        return false
    }

    add = () => {
        this.setState({
            num:this.state.num + 1
        })
    }

    render(){
        const {num} = this.state
        return (
            <button onClick={this.add}>Click({num})</button>
        )
    }
}

export default Contador