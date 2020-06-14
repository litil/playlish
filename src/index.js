import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import './assets/main.css';
import { AuthProvider } from './contexts/AuthContext';
import history from './history';
// import './index.css';
import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';
import * as serviceWorker from './serviceWorker';

const trackingId = import.meta.env.REACT_APP_GOOGLE_ANALYTICS_ID;
ReactGA.initialize(trackingId);

// dev tools middleware
/*
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
*/

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// create a redux store with our reducer above and middleware
let store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware) /*,
    reduxDevTools*/)
);

// run the saga
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
