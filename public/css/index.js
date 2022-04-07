import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// polices
import './fonts/caviar_dreams/CaviarDreams.ttf';
import './fonts/caviar_dreams/CaviarDreams_Bold.ttf';
import './fonts/caviar_dreams/CaviarDreams_BoldItalic.ttf';
import './fonts/caviar_dreams/CaviarDreams_Italic.ttf';
import './fonts/Brandon-Grotesque/brandon-grotesque-light-58a8a4b38001d.otf';
import './fonts/Brandon-Grotesque/brandon-grotesque-black-58a8a3e824392.otf';
import './fonts/better-grade/BetterGrade-519DV.ttf';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
