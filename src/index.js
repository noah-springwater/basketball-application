import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(composeWithDevTools());

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
registerServiceWorker();
