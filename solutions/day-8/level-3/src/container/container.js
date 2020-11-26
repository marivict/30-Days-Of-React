import React, {Component} from 'react'
import {countriesData} from '../data/countries'
console.log(countriesData[0].capital)
const Countries = ({countries}) =>(
    countries.map((country, idx) => (
            <div>
                <p className={idx}>{country.name}</p>
                <p>{country.capital}</p>
                <p>{country.languages}</p>
                <p>{country.population}</p>
                <p>{country.flag}</p>
                <p>{country.currency}</p>
            </div>
    ))
)

class Container extends Component {
    constructor(props){
        super(props)
    }
    state= {
        name: this.props.country[0].name,
        capital: this.props.country[0].capital, 
        language: this.props.country[0].languages,
        population:this.props.country[0].population,
        flag:this.props.country[0].flag,
        currency:this.props.country[0].currency,
        num: 1
    }

    changeCountry = () =>{
        this.setState({
            num: this.state.num + 1
        })
        this.setState(
            {
            name: this.props.country[this.state.num].name,
            capital: this.props.country[this.state.num].capital, 
            languages: this.props.country[this.state.num].languages,
            population: this.props.country[this.state.num].population,
            flag: this.props.country[this.state.num].flag,
            currency: this.props.country[this.state.num].currency
            }
        )
    }
    render(){
        
        return(
            <>
            <div className="card">
                <div className="card-flag">
                    <div className="flag" style={{backgroundImage:`url(${this.state.flag})`}}>
                    </div>
                    <p className="card-title">{this.state.name}</p>
                </div>
                <div className="card-text">
                    <p><b>Capital:</b>{this.state.capital}</p>
                    <p><b>Language:</b>{this.state.language}</p>
                    <p><b>Population:</b>{this.state.population}</p>
                    <p><b>Currency:</b>{this.state.currency}</p>
                </div>
            </div>
            <div className="card-button">
                <button onClick={this.changeCountry}>Select Country</button>
            </div>
            </>

        )
    }
}

export default Container