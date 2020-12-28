import React from 'react'

class Contador extends React.Component {
    state = {
        num: this.props.num
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(prevState.num !== nextProps.num){
            return{
                num: nextProps.num
            }
        }
    }

    add = () => {
        this.setState(state => ({
            num: state.num + 1
        }))
    }

    render(){
        const {num} = this.state
        return(
            <div>
                <button onClick={this.add}>Clicks({num})</button>
            </div>
        )
    }
}

class ContadorApp extends React.Component {

    state={
        numero: 0
    }

    hangleChange = (e) => {
        let numero = parseInt(e.target.value)

        if(isNaN(numero)){
            numero= 0
        }
        this.setState(
            {
                numero
            }
        )
    }
    render(){
        const {numero} = this.state
        return(
            <div>
                <h2>getDeleveryStateFromProps</h2>
                <h3>{numero}</h3>
                <input type="text" onChange={this.hangleChange} />
                <Contador num = {numero} />
            </div>
        )
    }
}

export default ContadorApp 