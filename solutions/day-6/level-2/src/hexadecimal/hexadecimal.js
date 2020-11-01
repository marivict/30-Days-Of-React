import React from 'react'

const center = {
    textAlign: 'center'
  }

  const ctnHexa= {
    maxWidth: '1136px',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 auto',
    justifyContent:'center'
  }

const Container = ({codes}) => {
    const Hexadecimal = () =>{
        const str = '0123456789abcdf'
        let i = 0
        let color = ''
        for( i; i < 6; i++){
            let index = Math.floor(Math.random()*str.length)
            color += str[index]
        }
        const style = {
            maxWidth:'140px',
            width:'100%', 
            height:'140px',
            marginRight: '1px',
            marginBottom: '1px',
            color: '#fff',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: '20px',
            display:'flex',
            justifyContent:'center',
            alignItems: 'center',
            backgroundColor: `#${color}`
        }
        console.log('#'+color)
        return (
            <div style={style} >{`#${color}`}</div>
        )
        
    }

    const listHexa = codes.map((function(code){
        return <Hexadecimal />
    } ))

    return (
        <div style={center}>
          <h1>30 day of React</h1>
          <h3>Hexadecimal Colors</h3>
          <div style={ctnHexa}>
            {listHexa}
          </div>
        </div>
    )
}


export default Container