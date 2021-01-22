import React,{useState, useEffect} from 'react'
import Header from './components/header'
import Country from './components/country'
import Search from './components/search'
import './css/style.css'


const App = () => {
  const [countries, setCountries] = useState([])

  useEffect(() =>{
    const API = 'https://restcountries.eu/rest/v2/all'
    fetch(API)
    .then(res => res.json())
    .then(countries => {setCountries(countries)})
  }, [])

 
  return (
    <>
    <Header country={countries} />
    <Search />
    
    </>
  )
}

export default App 