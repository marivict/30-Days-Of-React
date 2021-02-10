import React from 'react'

const Header = ({country, search}) => {
    return(
        <header>
            <h1>WORLD COUNTRIES DATA</h1>
            <p>Currently, we have 250 countries</p>
            {search && <i>{country.length >= 1 ? country.length : 0} satisfied the search criteria</i>}
        </header>
    )
}

export default Header