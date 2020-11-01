import React from 'react';
import ReactDOM from 'react-dom';
import Numbers from './numbers/numbers'
import Container from './hexadecimal/hexadecimal'

// evens are green, odds are yellow and prime numbers are red. 
const numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]


ReactDOM.render(
  <>
  <Numbers numbers={numbers} />
  <Container codes={numbers} />
  </>,
  document.getElementById('root')
);

