import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Request from './httpRequest'
import Movie from './movie'
import MovieAxios from './movieAxios'



  ReactDOM.render(
    <>
      <MovieAxios />
    </>,
    document.getElementById('root')
  );


