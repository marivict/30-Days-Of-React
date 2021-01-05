import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './app.js'
import RenderRouter from './reactRouter/renderRouter'
import {Navigation, NavLinkTag} from './navigation/navigation'
import {Params} from './params/params'



  ReactDOM.render(
    <>
      <Params />
    </>,
    document.getElementById('root')
  );


