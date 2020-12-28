import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js'
// mounting
import ReactConstructor from './mounting/constructor'
import CicleLife from './mounting/cicleLife'
import Http from './mounting/http'
import Event from './mounting/eventResize'


// Updating
import AppDemostration from './updating/userDetails'
import AppUpdate from './updating/getsnatchopbeforeupdate'
import ChatApp from './updating/chat'
import ContadorApp from './updating/contador'
import Contador from './updating/contadorClicks'
import List from './updating/list'


// Unmount

import ClockApp from './unmounting/clock'

  ReactDOM.render(
    <>
      <ClockApp />
    </>,
    document.getElementById('root')
  );


