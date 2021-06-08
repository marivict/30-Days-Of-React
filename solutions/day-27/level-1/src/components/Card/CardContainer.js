import React from 'react'
import Card from './Card'
import {Container} from './styles/cardStyle'
const CardContainer = ({
    value,
    copyToClipboard,
    copy,
    copiedClass,
    hexadecimalColor
}) => {
    const arreglo = [...Array(Number(value)).keys()]
    const visual = arreglo.map((num)=><Card 
                                        hexadecimalColor={hexadecimalColor}
                                         />)

    return(
        <Container>
            {visual}
        </Container>
    )
}

export default CardContainer