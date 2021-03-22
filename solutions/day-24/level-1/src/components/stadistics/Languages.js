import React from 'react'

// Components
import Stadistics from './Stadistics'

const Languages = ({countries}) =>{

    const languageListArray = () => {
        const arrayLanguage = []

       arrayLanguage.push(countries.map(country => {
            return country.languages.map(language => language.name[0])
        }))

        console.log('arrayLanguage', arrayLanguage)

    }
    languageListArray()

    const languageList = countries.map((country) => {
        const languages = country.languages.map(language => (language.name))
        return <Stadistics key={country.name} name={languages} total={100} population={50} /> 
    })
    return(
        // {languageList}
       <div><h1>Language</h1></div>
    )
}

export default Languages