// @flow
// $FlowFixMe
import './styles/main';
import React from 'react';
import ReactDOM from 'react-dom';

import Root from './pages/Root';

const container: HTMLElement | null = document.getElementById('main-container');

if (!container) {
  throw new Error(`Container doesn't exist`);
}

ReactDOM.render(<Root />, container);
