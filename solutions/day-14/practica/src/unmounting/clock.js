import React from 'react'

class Timer extends React.Component {
    state = {
        time:0,
        isPlaying: true
    }
    
    tick = null

    componentDidMount() {
        this.play()
    }

    componentWillUmount() {
        clearInterval(this.tick)
    }

    play = () => {
        this.setState({isPlaying: true})

        this.tick = setInterval(() => {
            this.setState(state => ({
                time: state.time + 1
            }))
        }, 1000)
    }

    pause = () => {
        this.setState({isPlaying: false})
        clearInterval(this.tick)
    }

    toggle = () => {
        if(this.state.isPlaying){
            this.pause()
        }else {
            this.play()
        }
    }

    render(){
        const {time, isPlaying} = this.state
        return(
            <div>
                <h1>{time}
                </h1>
                <button onClick={this.toggle}>{
                    isPlaying ? 'Pause' : "Play"
                }</button>
            </div>
        )
    }
}

class ClockApp extends React.Component {
    state = {
        montar: true
    }
    desmontar = () => {
        this.setState({montar:false})
    }
    render() {
        return(
            <div>
                <h2>ComponentWillUmount</h2>
                <button onClick={this.desmontar}>Desmontar</button>

                {this.state.montar &&  <Timer />}
                
            </div>
        )
    }
}

export default ClockApp