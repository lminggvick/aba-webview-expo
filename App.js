/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './Home';
import Browser from './Browser';

const stackNavigator = createStackNavigator({
  Home: {screen: Home},
  Browser: {screen: Browser},
});

const App = createAppContainer(stackNavigator);

export default App;
