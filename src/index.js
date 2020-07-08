import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import createStore from './redux/store';
import {Provider} from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import * as serviceWorker from './serviceWorker';
import './app.css';

const store = createStore();


ReactDOM.render(
  <Provider store={store}>
   <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
