// @flow
// $FlowFixMe
import './styles/main';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const title: string = 'YOUH!';
const container: any = document.getElementById('main-container');

if (!container) {
  throw new Error(`Container doesn't exist`);
}

ReactDOM.render(<App title={title}/>, container);
