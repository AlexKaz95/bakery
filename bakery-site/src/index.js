import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Clock from './Clock'
import Menu from './menu'

  ReactDOM.render(
    <Menu />,
    document.getElementById('root')
  );


serviceWorker.unregister();
