import React from 'react';
import ReactDOM from 'react-dom';
import Asabeneh from './images/asabeneh.jpg';
import css from './images/css_logo.png';
import html from './images/html_logo.png';
import js from './images/js_logo.png';
import react from './images/react_logo.png';

//Image practice Functional Component
const ImgMain = () => {
  const style = {
    backgroundColor: 'lightgray',
    padding: '40px 20px',
    width: '100%',
  }

  const headerTitle = {
    textAlign: 'center',
    marginBottom: '20px'
  }
  
  const img = {
    width: '100px',
    marginRight: '30px'
  }

  const imgMain = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return(
    <div style={style}>
      <h3 style={headerTitle}>Frontend Technology</h3>
      <div style ={imgMain}>
        <img style ={img} src= {html}  alt='html'/>
        <img style ={img} src= {css}  alt='css'/>
        <img style ={img} src= {js}  alt='js'/>
        <img style ={img} src= {react}  alt='react'/>
      </div>
    </div>
  )
}
const Form = () => {
  const bodyStyle = {
    width: '100%',
    backgroundColor: 'cyan',
    height: '100%',
    paddingTop: '25px',
    paddingBottom: '25px'
}
const headerStyle = {
    fontSize: '16px',
    textAlign: 'center',
    marginBottom: '15px'
}
const formStyle = {
    maxWidth: '690px',
    width: '100%',
    textAlign: 'center', 
    margin : '0 auto'
}
const formInputStyle = {
    width: '23%',
    borderRadius: '10px',
    paddingLeft: '10px',
    marginLeft: '10px',
    border:0,
    height: '38px'
}
const formButton = {
    width: '260px',
    color: 'white',
    borderRadius: '10px',
    backgroundColor: '#e62e1b',
    border: '0',
    height: '38px',
    marginTop: '30px'
}
return(
    <div style={bodyStyle}>
        <header style={headerStyle}>
            <h1>Suscribe</h1>
        </header>
        <form style={formStyle}>
            <input type='text' style={formInputStyle} placeholder='first name'/>
            <input type='text' style={formInputStyle} placeholder='Second name'/>
            <input type='text' style={formInputStyle} placeholder='Email'/>
            <br />
            <input type='submit' style={formButton} value='Submit'/>
            
        </form>
    </div>
)
}

ReactDOM.render(
  <>
 <ImgMain/>
 <br />
 <Form /> 
 </>,
  document.getElementById('root')
);

