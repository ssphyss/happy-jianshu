import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.js';            //可影響全站的組件樣式全局js
import './resources/sass/all.scss'
import './assets/iconfont/iconfont.css';
import './assets/iconfont/iconfont.js';
ReactDOM.render(<App />, document.getElementById('root'));

