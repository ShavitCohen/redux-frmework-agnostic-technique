import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './app/index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';

import configureStore from './redux/store';

const store = configureStore();

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
