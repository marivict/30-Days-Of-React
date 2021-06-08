import React,{useRef, useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard } from '@fortawesome/free-solid-svg-icons'
import {CardContainer, Label,  Icon} from './styles/cardStyle'
const Card = ({hexadecimalColor}) => {
    
    const [copiedClass, setCopiedClass] = useState('copy')
    const copy = useRef(null)

    // Function to generate Hexdecimal Code
    const copyToClipboard = () => {
        const copyTextContent = copy.current.textContent
        console.log('copyTextContent', copyTextContent)
        navigator.clipboard.writeText(copyTextContent).then(() =>{
            setCopiedClass('copied')
            const copiedClassMethod = setInterval(() =>{
                setCopiedClass('copy')
            }, 3000)
        }, () => {
            alert('failed')
        })
    } 
       

    // Function to copy in clipboard

    return(
        <CardContainer colors={hexadecimalColor}>
            <Label ref={copy}>{hexadecimalColor}</Label>
            <Icon onClick={copyToClipboard} className={copiedClass}>
                <FontAwesomeIcon icon={faClipboard} />
            </Icon>
        </CardContainer>
    )
}

export default Card