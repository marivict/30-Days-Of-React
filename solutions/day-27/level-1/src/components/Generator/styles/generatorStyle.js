import styled from 'styled-components/macro'

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media(max-width: 375px) {
        flex-wrap: wrap;
    }
    
`

export const Input = styled.input`
    border-radius: 5px;
    background-color: #fff;
    height: 30px;
    border: 1px solid #aaa;
    flex: 75%;
    margin-right: 15px;
    padding: 10px;
    @media(max-width: 375px) {
        margin-bottom:15px;
        margin-right: 0;
    }
`

export const Button = styled.button`
    background-color: #595dff;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    border-radius: 5px;
    border: 0px;
    padding: 10px 15px;
    flex: 10%;
    cursor: pointer;
    @media(max-width: 375px) {
        padding: 20px 15px;
    }
`