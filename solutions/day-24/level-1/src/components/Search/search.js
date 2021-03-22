import React,{useState, useEffect} from 'react'
import Country from '../Country/country'

const Search = ({search}) => {

  const [valueSearch, setValue] = useState('')

  const handleInput = (e) => {
    const query = e.target.value
    setValue(query)
    search(valueSearch)
  }
  return(
      <div className="search-container">
          <input className="search" type="text" value={valueSearch} onChange={handleInput} placeholder="Search countries by name, city and language" />
          <p className='idGraph'><a href='#graph'>Graph</a></p>
      </div>

  )
}
export default Search