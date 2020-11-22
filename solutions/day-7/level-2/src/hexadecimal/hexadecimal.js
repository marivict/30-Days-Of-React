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

class Hexadecimal extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
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

    return <div style={style} >{`#${color}`}</div>
  }
}

class Container extends React.Component{
constructor(props){
  super(props)
}
render(){
  const {codes} = this.props
  const listHexa = codes.map((function(code){
    return <Hexadecimal />
  } ))

  return(
    <div style={center}>
    <h1>30 day of React</h1>
    <h3>Hexadecimal Colors</h3>
    <div style={ctnHexa}>
      {listHexa}
    </div>
  </div>   
  )
}   
    
}

export default Container