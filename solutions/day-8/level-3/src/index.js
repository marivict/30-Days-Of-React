import React from 'react';
import ReactDOM from 'react-dom';
import Container from './container/container';
import {countriesData} from './data/countries'
ReactDOM.render(
  <>
    <Container country={countriesData}></Container>
  </>,
  document.getElementById('root')
);

