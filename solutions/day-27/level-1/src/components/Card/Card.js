import React,{useRef, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard } from '@fortawesome/free-solid-svg-icons'
import {CardContainer, Label,  Icon} from './styles/cardStyle'
const Card = ({num}) => {

    const copy = useRef(null)
    const [copied, setCopied] =useState(false)
    const [copiedClass, setCopiedClass] = useState('copy')
    // Function to generate Hexdecimal Code
    const setHexadecimal = () => {
        const str = '0123456789abcdf';
        let i = 0;
        let colors = '';

        for(i; i < 6; i++){
            let index = Math.floor(Math.random()*str.length)
            colors += str[index]
        }
        return(`#${colors}`)
        
    }

    

    // Function to copy in clipboard
    const copyToClipboard = () => {
        const va = copy.current.textContent
        navigator.clipboard.writeText(va).then(() =>{
            setCopied(true)
            setCopiedClass('copied')
            const copiedClassMethod = setInterval(() =>{
                setCopiedClass('copy')
            }, 3000)

        }, () => {
            alert('failed')
        })
    } 

    return(
        <CardContainer colors={setHexadecimal()}>
            <Label ref={copy}>{setHexadecimal()}</Label>
            <Icon onClick={copyToClipboard} copied = {copied} className={copiedClass}>
                <FontAwesomeIcon icon={faClipboard} />
            </Icon>
        </CardContainer>
    )
}

export default Card