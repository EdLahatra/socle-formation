import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from '../common/redux/store';
import MainContainer from './App';

import './src/resources/styles/app.css';

const App = () => (
  <Provider store={store}>
    <MainContainer />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
