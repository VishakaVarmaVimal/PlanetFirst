import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './App.css';
import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import * as serviceWorker from './serviceWorker';
import ReactGlobe from 'react-globe';
import { withTheme } from '@material-ui/core';
//import markers from './markers';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

function Application() {
  const markers = [
    {
      id: 1,
      city: 'Algeria',
      color: 'red',
      coordinates: [28.0339, 1.6596],
      value: 124.3,
    },
    {
      id: 2,
      city: 'Ghana',
      color: 'blue',
      coordinates: [7.9465, 1.0232],
      value: 109.9,
    },
    {
      id: 3,
      city: 'Egypt',
      color: 'orange',
      coordinates: [26.8206, 30.8025],
      value: 124,
    },
    {
      id: 4,
      city: 'Bangladesh',
      color: 'gold',
      coordinates: [23.6850, 90.3563],
      value: 113.2,
    },
    
    {
      id: 5,
      city: 'India',
      color: 'green',
      coordinates: [20.5937, 78.9629],
      value: 123.8,
    },
    {
      id: 6,
      city: 'Japan',
      color: 'black',
      coordinates: [36.2048, 138.2529],
      value: 106,
    },
    {
      id: 7,
      city: 'Russia',
      color: 'pink',
      coordinates: [61.5240, 105.3188],
      value: 113.7,
    },
    {
      id: 8,
      city: 'China',
      color: 'purple',
      coordinates: [35.8617, 104.1954],
      value: 122.5,
    },
    {
      id: 9,
      city: 'United States of America',
      color: 'white',
      coordinates: [39.381266, -97.922211],
      value: 134,
    },
    {
      id: 10,
      city: 'Australia',
      color: 'teal',
      coordinates: [-25.734968, 134.489563],
      value: 123.3,
    },
  ];


  return (
    <div style={{ width: '70vw', height: '80vh' }}>
    <ReactGlobe
    markers={markers}
    options={{
    activeScale: 1.1,
    enableTooltip: true,
    enterAnimationDuration: 3000,
    enterEasingFunction: ['Bounce', 'InOut'],
    exitAnimationDuration: 3000,
    exitEasingFunction: ['Cubic', 'Out'],
    markerTooltipRenderer: marker => `${marker.city} (Highest Temperature Recorded: ${marker.value})`,
    radiusScaleRange: [0.05, 0.09],
  }}
/>
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App >
     <Application />
    </App>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
