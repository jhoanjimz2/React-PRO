/* eslint import/no-webpack-loader-syntax: off */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';
//@ts-ignore
import mapboxgl from '!mapbox-gl';
 
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

mapboxgl.accessToken = 'pk.eyJ1IjoiamhvYW5qaW16MiIsImEiOiJjbDlzcmJ5emYxZXViM3BvMHhsMG8weHNkIn0.jKURkdLurQAFnLUX2vRJlQ';


if ( !navigator.geolocation ) {
  alert( 'Tu navegador no tiene opción de Geolocation' );
  throw new Error('Tu navegador no tiene opción de Geolocation');
}

root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);