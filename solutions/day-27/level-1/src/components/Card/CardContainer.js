import React from 'react'
import Card from './Card'
import {Container} from './styles/cardStyle'
const CardContainer = () => {

    const arreglo = [...Array(27).keys()]
    const visual = arreglo.map((num)=><Card num={num} />)

    return(
        <Container>
            {visual }
        </Container>
    )
}

export default CardContainer