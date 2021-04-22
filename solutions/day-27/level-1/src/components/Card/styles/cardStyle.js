import styled from 'styled-components/macro'

export const CardContainer = styled.div`
    width: 160px;
    height: 160px;
    display: flex;
    background-color: ${props => props.colors};
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 10px;

`

export const Label = styled.h6`
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    margin: 0;
`

export const Icon = styled.div `
    width: 20px;
    height: 20px;
    color: #fff;
    font-size: 22px;
    cursor: pointer;
    position: relative;

    &:after {
        font-size: 16px;
        padding: 8px 13px;
        border-radius: 5px;
        position: absolute;
        left: 28px;
        top: -10px;
        }

    &.copy:hover {
        &:after {
        content:'copy';
        background-color:rgba(94, 94, 94, 0.8);
        }
    }
    
    &.copied:after {
        content:'Copied!';
        background-color: rgba(0, 234, 136,1);
    }
`
export const Container = styled.div `
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`