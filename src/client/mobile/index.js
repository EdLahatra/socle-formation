import { AppRegistry } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import store from 'reduxLocal/store';

import { name as appName } from './app.json';

import MainContainer from './App';

const App = () => (
  <Provider store={store}>
    <MainContainer />
  </Provider>
);

AppRegistry.registerComponent(appName, () => App);
