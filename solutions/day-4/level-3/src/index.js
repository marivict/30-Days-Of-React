import React from 'react';
import ReactDOM from 'react-dom';
import Asabeneh from './images/asabeneh.jpg';

//Image practice Functional Component

const Hexadecimal = () => {

  let str = '0123456789abcdef';
  let color = ''
  for (let i = 0; i < 6; i++){
      let index = Math.floor(Math.random()*str.length)
      color += str[index]
  }
  const codeHex = '#' + color

  const hexa = {
    fontSize: '40px',
    color: codeHex === '#ffffff' ? '#000000' : '#ffffff',   
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    fontFamily: 'sans-serif'
}
    return (
      <div style={{ border: '1px solid', borderColor: codeHex === '#ffffff' ? '#000000' : '#ffffff', backgroundColor:codeHex, width:'100%', height:'100px', display:'flex', marginBottom: '20px'}}>
        <p style={hexa}>{codeHex}</p>
      </div>
    )
}
const CardUser = () => {
   const users = {
        name: 'Asabeneh',
        title: 'Senior Development',
        country: 'Finland',
        dateJoin: 'Aug 30, 2020',
    }
    const skills = ['HTML', 'CSS', 'Sass', 'JS', 'React', 'Redux', 'Node', 'MongoDB', 'Python', 'Flask', 'Django', 'NumPy', 'Pandas', 'Data Analysis', 'Mysql', 'GraphQL', 'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git']
    const card = {
        backgroundColor: 'white',
        padding: '20px'
    }
    const imgStyle = {
      width:'150px',
      height: '150px',
      padding: '10px',
      backgroundColor:'#69bfea',
      marginBottom: '15px',
      borderRadius: '50%',
      overflow: 'hidden',
      position: 'relative'
    }
    const img  ={
      borderRadius: '50%',
      position: 'absolute',
      top: '-2px',
      left: '-5px',
      width: '180px'
    }
    const nameStyle = {
      fontWeight: 'bold',
      marginBottom: '20px'
    }
    const skillsCard = {
      backgroundColor: '#69bfea',
      color: 'white',
      marginRight: '10px',
      marginBottom: '10px',
      display: 'inline-block',
      padding: '10px',
      paddingTop: '5px',
      paddingBottom: '5px',
      borderRadius: '10px', 
      fontWeight: 'bold'
    }
    const skillslist = skills.map((skill) => <span key = {skill} style={skillsCard}>{skill}</span>)
     return(
        <div style={{background: 'lightgray', padding: '10px'}}>
           <div style={card}>
           <header>
                <div style={imgStyle}>
                  <img style ={img} src={Asabeneh} />
                </div>
                <strong>{users.name}</strong>
                <p style={nameStyle}>{users.title}, {users.country}</p>
            </header>
            <div style={{marginTop: '30px', marginBottom: '20px'}}>
            <h3 style={{fontWeight: 'bold', textTransform: 'uppercase'}}>Skills</h3>
                {skillslist}
            </div>
            <footer>
                <small>Joined on {users.dateJoin}</small>
            </footer>
           </div>
        </div>
     )
}

ReactDOM.render(
  <>
 <Hexadecimal />
 <br />
 <CardUser /> 
 </>,
  document.getElementById('root')
);

