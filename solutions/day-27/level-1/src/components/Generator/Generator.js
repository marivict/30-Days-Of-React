import React from 'react'
import {
    Container,
    Input,
    Button
} from './styles/generatorStyle'

import CardContainer from '../Card/CardContainer'

const Generator = ({
    number, 
    generatorHandler, 
    clickGenerator,
    hexadecimalColor
}) => {
    return(
        <>
            <Container>
                <Input type='number' onChange={generatorHandler}/>
                <Button onClick={clickGenerator}>Generate</Button>
            </Container>
            <CardContainer 
                value={number}
                hexadecimalColor={hexadecimalColor} 
            />
        </>
    )
}

export default Generator