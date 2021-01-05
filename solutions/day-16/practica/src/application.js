import React,{Component} from 'react'

const MyHoc =(Comp, config) => {

    return class extends Component{

        state = {
            num: config.clicks
        }

        add = () => {
            this.setState({num: this.state.num + config.sumClick})
        }
        render(){
            return(
                <Comp
                    num={this.state.num}
                    add = {this.add}
                />
            )
        }
    }
}

class Application extends Component {
    render(){
        console.log(this.props)
        const {num, add} = this.props
        return(
            <div>
                <p>Hi Everyone!</p>
                <h1>{num}</h1>
                <button onClick={add}>ADD</button>
            </div>
        )
    }
}

export default MyHoc(Application, {clicks:10, sumClick:3})