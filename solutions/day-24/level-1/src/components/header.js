import React from 'react'

const Header = ({country}) => {
    return(
        <header>
            <h1>WORLD COUNTRIES DATA</h1>
            <p>Currently, we have {country.length} countries</p>
        </header>
    )
}

export default Header