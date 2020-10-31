import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/pages/App';

const wrapper = document.getElementById('root');
// eslint-disable-next-line no-unused-expressions
wrapper ? ReactDOM.render(<App />, wrapper) : false;
