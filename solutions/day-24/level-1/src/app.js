import React,{useState, useEffect} from 'react'
import Header from './components/header'
import Country from './components/country'
import Search from './components/search'
import PageNotFound from './components/notFound'
import Wrapper from './components/stadistics/wrapper'
import './css/style.css'


const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [searchCountries, setSearchCountries] = useState([])

  const getRequest = () =>{
    const API = `https://restcountries.eu/rest/v2/all`
    fetch(API)
    .then(res => res.json())
    .then(countries => {setCountries(countries)})
  }

  const getSearchRequest = (search) => {
  const API = `https://restcountries.eu/rest/v2/name/${search}` || `https://restcountries.eu/rest/v2/capital/${search}`
  fetch(API)
  .then(res => res.json())
  .then(countries => {setCountries(countries)})
  }

  useEffect(() =>{
    if (search){
      getSearchRequest(search)
    }else{
      getRequest()
    }
  }, [search])

 
  return (
    <>
    <Header country={countries} />
    <Search />
    
    </>
  )
}

export default App 