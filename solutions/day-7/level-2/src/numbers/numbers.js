import React from 'react'

const ctnNumbers = {
    maxWidth: '1136px',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 auto',
    justifyContent:'center'
  }
  const elements = {
    maxWidth:'140px',
    width:'100%', 
    height:'140px',
    marginRight: '1px',
    marginBottom: '1px',
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '40px',
    display:'flex',
    justifyContent:'center',
    alignItems: 'center'
  }
  
  const center = {
    textAlign: 'center'
  }

  class Layout extends React.Component{
    constructor(props){
      super(props)
    }

    render(){
      const {numbers, className} = this.props
      return(
        <div className ={className} style={elements}>{numbers}</div>
      )
    }
  }
  
  class Numbers extends React.Component {
    constructor(props){
      super(props)
    }

    render(){
      const {numbers} = this.props

      //Function to search a prime number
     const primo = (numero) => {
        for (var i = 2; i < numero; i++) {
          if (numero % i === 0) {
            return false;
          }
        }
        return numero !== 1;
      } //end

      //Identify the numbers that are prime, eve or odd
      const listNumbers = numbers.map((function(number){
        let listOfNumbers = ''
        if(number % 2 === 0){
        listOfNumbers = <Layout key={number} className='even' numbers={number} />
        }
        else if(primo(number)) {
          listOfNumbers = <Layout key={number} className='prime' numbers={number} />
        }
        else {
          listOfNumbers = <Layout key={number} className='odd' numbers={number} />
        }
        return listOfNumbers
      }))  

    return (
      <div style = {center}>
        <h1>30 day of React</h1>
        <h3>Number Generator</h3>
        <div style={ctnNumbers}>
          {listNumbers}
        </div>
      </div>
    )
    }
  }

  export default Numbers