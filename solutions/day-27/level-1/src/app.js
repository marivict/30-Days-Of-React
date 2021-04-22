import React from 'react'

import Container from './components/Container/Container'
import Header from './components/Header/Header'
import Generator from './components/Generator/Generator'
import CardContainer from './components/Card/CardContainer'
import {GlobalStyles} from './styles/style'

const App = () => {
 return(
        <>
        <GlobalStyles />
        <Container>
            <Header />
            <Generator />
            <CardContainer />
        </Container>
        </>
 )
}

export default App 