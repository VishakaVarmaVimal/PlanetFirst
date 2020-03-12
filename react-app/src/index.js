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
import markers from './markers';

function Application() {

  return (
    <div style={{ width: '70vw', height: '80vh' }}>
    <ReactGlobe
    markers={markers}
    markerOptions={{
    activeScale: 1.1,
    enableTooltip: true,
    enterAnimationDuration: 3000,
    enterEasingFunction: ['Bounce', 'InOut'],
    exitAnimationDuration: 3000,
    exitEasingFunction: ['Cubic', 'Out'],
    getTooltipContent: marker => `${marker.city} (Highest Recorded Temperature: ${marker.value} F)`,
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
