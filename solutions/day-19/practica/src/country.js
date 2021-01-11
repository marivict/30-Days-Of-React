import React, {useState, useEffect} from 'react'

const Country = ({country:{name, flag, population}}) => {
    return(
        <div className='country'>
            <div className='countryFlag'>
                <img src={flag} alt={name} />
            </div>
            <h3 className='countryName'>
                {name.toUpperCase()}
            </h3>
            <div className='country_text'>
                <p>
                    <span>Population:{population}</span>
                </p>
            </div>
        </div>
    )
}

const List = (props) => {
 const [data, setData] =useState([])

 useEffect(() =>{
     fetchData()
 }, [])

 const fetchData = async () => {
    const url ='https://restcountries.eu/rest/v2/all'
    try {
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
    } catch(error){
        console.log(error)
    }
 }

 return(
     <div>
        <h1>Fetching Data Using Hook</h1>
      <h1>Calling API</h1>
      <div>
        <p>There are {data.length} countries in the api</p>
        <div className='countries_wrapper'>
            {data.map((country) =>(
                <Country country={country} />
            ))}
        </div>
      </div>
     </div>
 )
}

export default List