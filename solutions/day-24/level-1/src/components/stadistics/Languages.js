import React from 'react'

// Components
import Stadistics from './Stadistics'

const Languages = ({countries}) =>{
    const languageList = countries.map((country) => {
        const languages = country.languages.map(language => (language.name))
        return <Stadistics name={languages} total={100} population={50} /> 
    })
    return(
        {languageList}
    )
}

export default Languages