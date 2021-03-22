import React,{useState, useEffect} from 'react'
import Header from './components/header'
import Country from './components/Country/country'
import Search from './components/Search/search'
import PageNotFound from './components/notFound'
import Wrapper from './components/stadistics/wrapper'
import Loader from './components/Loader/loader'
import Footer from './components/footer'
import './css/style.css'


const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [searchCountries, setSearchCountries] = useState([])
  const [load, setLoad] = useState(true)

  const API = 'https://restcountries.eu/rest/v2/all';

  useEffect(() => {
    getRequest();
  }, [])
  
// Fetch API
  const getRequest = () =>{
    fetch(API)
    .then(res => res.json())
    .then((countries) => {
      setCountries(countries)
      setLoad(false)
    })
    
  }
  
  const countryList = countries.map(country =>{
    return <Country key={country.name} country={country} />
  })

  return (
    <>
      <Header country={countries} />
      <Search search={valueSearch => setSearch(valueSearch)} />
      {load ?
      <Loader /> 
      :
      <div>
        <div className="country">  
          {countryList}
        </div>
        <Wrapper countries={countries}/>
      </div>
      
    }
    
    <Footer />
    </>
  )
}

export default App 