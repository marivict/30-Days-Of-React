import React from 'react'

class Button extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <button onClick={this.props.onclick}>{this.props.text}</button>
        )
    }
}



class Morning extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='container morning'></div>
        )
    }
}

class Noon extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='container noon'></div>
        )
    }
}

class Evening extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='container evening'></div>
        )
    }
}

class Night extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='container night'></div>
        )
    }
}

class StateOfDay extends React.Component {
    constructor(props){
        super(props)
    }

    state = {
        day:'morning'
    }

    handleMorning = () => {
        this.setState(
            {
                day:'morning'
            }
        )
    }

    handleNoon = () => {
        this.setState(
            {
                day:'noon'
            }
        )
    }

    handleEvening = () => {
        this.setState(
            {
                day:'evening'
            }
        )
    }

    handleNight= () => {
        this.setState(
            {
                day:'night'
            }
        )
    }

    render(){
        let day
        if(this.state.day === 'morning'){
            day = <Morning />
        }
        else if (this.state.day === 'noon'){
            day= <Noon />
        }
        else if (this.state.day === 'evening'){
            day = <Evening />
        }
        else if (this.state.day === 'night'){
            day= <Night />
        }
        return(
            <div className='principal'>
                {day}
                <div className="button-ctn">
                    <Button onclick={this.handleMorning} text='Morning'></Button>
                    <Button onclick={this.handleNoon} text='Noon'></Button>
                    <Button onclick={this.handleEvening} text='Evening'></Button>
                    <Button onclick={this.handleNight} text='Night'></Button>
                </div>
            </div>
        )
    }
}

export default StateOfDay