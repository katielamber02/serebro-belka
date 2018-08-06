import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import rootReducer from './reducer';
import ReduxPromise from 'redux-promise'
import logger from './middlewares/logger'

const createStoreWithMiddleware=applyMiddleware(ReduxPromise,logger)(createStore);



ReactDOM.render(
   <Provider store={createStoreWithMiddleware(rootReducer)}>
      <App />
   </Provider>,
 document.getElementById('root'));
registerServiceWorker();
