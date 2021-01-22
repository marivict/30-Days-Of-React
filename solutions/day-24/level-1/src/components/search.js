import React,{useState} from 'react'
import Country from './country'

const Search = () => {

const [valueSearch, setValue] =useState('')
const [countries, setCountries] = useState([])

  const handleInput = (e) => {
    const query = e.target.value
    setValue(query)
  }

  const fetchSearch = () => {
    

    useEffect(() =>{
      const API = 'https://restcountries.eu/rest/v2/all'
      fetch(API)
      .then(res => res.json())
      .then(countries => {setCountries(countries)})
    }, [])

  }

  const countryList = countries.map(country =>{
    return <Country country={country} />
  })

  return(
      <div className="search-container">
          <input className="search" type="text" onChange={handleInput} placeholder="Search countries by name, city and language" />
          
          <div className="country">  
              {countryList}
          </div>
      </div>
  )
}

export default Search