import React from 'react';
// le decimos al archivo que estaremos usando react para soporte la sintaxis de react 
// en el ámbito de react
import ReactDOM from 'react-dom';

import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Al final esta es la puerta principal de nuestro proyecto donde saldran todo nuestro desarrllo en el root