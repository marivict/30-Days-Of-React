import React from 'react'

const Search = (props) => {
  return(
      <div className="search-container">
          <input 
            className="search" 
            type="text" 
            placeholder="Search countries by name, city and language"
            value={props.search}
            onChange={(event) =>(props.setSearch(event.target.value))}
            />
            
      </div>
  )
}
export default Search