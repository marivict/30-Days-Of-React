import React from 'react';
import ReactDOM from 'react-dom';
import {tenHighestPopulation} from './data'
import { Container } from './population'

const max = '7693165599'

ReactDOM.render(
  <>
  <div style={{maxWidth: '930px', margin: '0 auto'}}>
    <div style ={{textAlign:'center'}}>
      <h1>30 day of React</h1>
      <h3>World Population</h3>
      <h5>Ten most Populated countries</h5>
    </div>
    <Container datas={tenHighestPopulation} max={max} />
  </div>
  </>,
  document.getElementById('root')
);

