import styled from 'styled-components/macro'

export const Container = styled.div`
    width: 100%;
    padding: 20px 0;
    text-align: center;
`

export const Title = styled.h1`
    font-size: 40px;
    margin-bottom:0;
    font-weight:600;

    @media(max-width: 768px) {
        font-size: 30px;
    }
`

export const Subtitle = styled.h3`
    font-size: 27px;
    font-weight: 300;
    margin-top: 0;

    @media(max-width: 768px) {
        font-size: 20px;
    }
`