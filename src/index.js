import React from 'react';
import ReactDOM from 'react-dom';
import ClickityCLick from './components/ClickityClick'
import LightSwitch from './components/LightSwitch'

ReactDOM.render(
  <div>
    Mount Components Here
    <ClickityCLick />
    <LightSwitch />
  </div>,
  document.getElementById('root')
);
