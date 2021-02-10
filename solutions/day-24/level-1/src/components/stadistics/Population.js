import React from 'react'

// Components
import Stadistics from './Stadistics'

const Population = ({country, total}) =>{
        return <Stadistics name={country.name} population={country.population} total={total}/>
}

export default Population