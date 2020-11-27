import React from 'react'
import { render } from 'react-dom'

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

class Season extends React.Component {
    constructor(props){
        super(props)
    }

    state = {
        season: 'summer'
    }

    handlerSpring = () => {
        this.setState({
                season:'spring'
            }
        )
    }

    handlerWinter = () => {
        this.setState({
                season:'winter'
            }
        )
    }

    handlerSummer= () => {
        this.setState({
                season:'summer'
            }
        )
    }

    handlerAutumn = () => {
        this.setState({
                season:'autumn'
            }
        )
    }
    render(){
        let value
        if( this.state.season === 'summer'){
            value = '#ffe100'
        } 
        else if(this.state.season === 'spring'){
            value = '#ff3f9f'
        }
        else if(this.state.season === 'autumn'){
            value = '#ff7926'
        }
        else if(this.state.season === 'winter'){
            value = '#2a30f7'
        }

        return(
            <div className="season">
                <div className='seasonCtn' style={{backgroundColor: value, height:'200px', width:'100%' }}>
                
                </div>
                <div className="buttonCtn">
                    <Button onclick={this.handlerSummer} text='Summer' />
                    <Button onclick={this.handlerSpring} text='Spring' />
                    <Button onclick={this.handlerAutumn} text='Autumn' />
                    <Button onclick={this.handlerWinter} text='Winter' />
                </div>
            </div>
        )
    }
}

export default Season