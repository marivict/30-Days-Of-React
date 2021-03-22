import React from 'react'

const Country = ({country}) => {
    const languages = country.languages.map(language => (language.name)).join(',')
    const currencies = country.currencies.map(currency =>(currency.name)).join(',')
    return(
        <>
        <div className='card-country' key={country.name}>
            <div className="card-country-wrapper">
                <div className="card-country-flag">
                    <img src={country.flag} alt={country.name} />
                </div>
                <div className="card-country-text">
                    <h3 className="card-country-text-title">{country.name}</h3>
                    <p><span>Language: </span>{languages}</p>
                    <p><span>Capital: </span>{country.capital}</p>
                    <p><span>Population:</span> {country.population.toLocaleString('en')}</p>
                    <p><span>Currency:</span>{currencies}</p>
                </div>
                
            </div>
            
        </div>
        </>
    )
}

export default Country