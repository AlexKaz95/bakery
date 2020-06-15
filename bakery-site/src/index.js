import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import './css/index.css';
import * as serviceWorker from './js/serviceWorker';
import Menu from './js/Menu'
import Gallery from './js/Gallery'

  ReactDOM.render(
      <Menu />,
    document.getElementById('menu')
  );

  ReactDOM.render(
    <Gallery />,
    document.getElementById('gallery')
  )

serviceWorker.unregister();
