import React from 'react'

const Layout = ({country, population, max}) => {
    const styleContainer = {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '30px',
        marginBottom: '10px'
    }

    const styleItem = {
        fontSize: '18px',
        fontWeight: 'bold',
        maxWidth: '100px',
        width:'100%',
        height: '30px',
        display: 'flex',
        alignItems: 'center', 
    }

 return(
     <div style={styleContainer}>
         <div style={styleItem}>{country}</div>
         
             <progress value={population} max={max} ></progress>
         
         <div style={styleItem}>{population}</div>
     </div>
 )
}

export const Container = ({datas, max}) =>{
    const populationWorld = datas.map((data =>{
        return <Layout country={data.country} population={data.population} max={max} />
    }))
    return populationWorld
}