import React,{useState} from 'react'

import Container from './components/Container/Container'
import Header from './components/Header/Header'
import Generator from './components/Generator/Generator'
import {GlobalStyles} from './styles/style'

const App = () => {

    const [number, setNumber] = useState(27)
    const [newNumber, setnewNumber] =useState(0)
    const [hexadecimalColor, setHexadecimalColor] =useState('#ff0')

    const setHexadecimal = () => {
        const str = '0123456789abcdf';
        let i = 0;
        let colors = '';

        for(i; i < 6; i++){
            let index = Math.floor(Math.random()*str.length)
            colors += str[index]
        }
        setHexadecimalColor(`#${colors}`)
    }

    const generatorHandler = (e) => {
        setnewNumber(e.target.value)
    }

    const clickGenerator = () => {
        setNumber(newNumber)
        setHexadecimal()
    }

    

 return(
        <>
        <GlobalStyles />
        <Container>
            <Header />
            <Generator
                number ={number}
                newNumber = {newNumber}
                generatorHandler ={generatorHandler}
                clickGenerator = {clickGenerator}
                hexadecimalColor={hexadecimalColor}
                />
        </Container>
        </>
 )
}

export default App 