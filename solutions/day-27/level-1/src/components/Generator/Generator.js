import React from 'react'
import {
    Container,
    Input,
    Button
} from './styles/generatorStyle'
const Generator = () => {
    return(
        <Container>
            <Input type='text' />
            <Button>Generate</Button>
        </Container>
    )
}

export default Generator