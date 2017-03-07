import React from 'react';
import {render} from 'react-dom';
import Routers from './routes'
import App from './App.js';
import './main.css';
import 'highlight.js/styles/docco.css';



render(
  <Routers />,document.getElementById('root'));
