import React, { createRef } from 'react'

class Aplication extends React.Component {
    title = createRef()

    state = {
        text:'Hola'
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate', this.title.current.innerText)
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate', this.title.current.innerText)
        console.log(snapshot)
    }

    dispatch = () =>{
        this.setState({
            text: 'Adios Bye!'
        })
    }

    render(){
        return(
            <div>
               <p ref={this.title}>{this.state.text}</p> 
                <button onClick={this.dispatch}>DISPATCH</button>
            </div>
        )
    }
}

class AppUpdate extends React.Component {
    state = {
        id:1
    }

    aumentar = () => {
        this.setState(state =>({
            id: state.id + 1
        }))
    }

    render(){
        const {id} = this.state
        return(
            <div>
                <Aplication />
            </div>
            
            
        )
    }
}

export default AppUpdate