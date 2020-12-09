import React from 'react'

export const App = () =>{
    const greeting =() =>{
        alert("Hello World")
    }
    return <button onClick={greeting}>Haz click</button>
}