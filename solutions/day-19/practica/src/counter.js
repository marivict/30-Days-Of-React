import React,{Component, useState, useEffect} from 'react'

export class CounterClass extends Component{
    state ={
        counter:0
    }

    handleClick = () =>{
        this.setState({counter: this.state.counter + 1})
    }
    render(){
        const {counter} = this.state
        return(
            <div>
                <h2>{counter}</h2>
                <button onClick={this.handleClick}>Aumentar</button>
            </div>
        )
    }
}

export const CounterHook = () => {
    const [counter, setCounter] = useState(0)

    const handleClick = () => {
        setCounter(counter + 2)
    }

    useEffect(()=>{
        console.log("Montando useEffect", counter)
        return ()=> {
            console.log("Retornando useEffect", counter)
        }
    })

    return(
        <div>
            <h1>{counter}</h1>
            <button onClick={handleClick}>Aumentarx2</button>
        </div>
    )
}