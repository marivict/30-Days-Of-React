import React,{useState, useEffect} from 'react'
import Header from './header'
import Country from './components/country'
import './css/style.css'


const App = () => {
  const [countrys, setCountrys] = useState([])

  useEffect(() =>{
    const API = 'https://restcountries.eu/rest/v2/all'
    fetch(API)
    .then(res => res.json())
    .then(countrys => {setCountrys(countrys)})
  }, [])

  const countryroad = countrys.map(country =>{
    return <Country country={country} />
  })
  return (
    <div>   
       {countryroad}
    </div>
  )
}



export default App 