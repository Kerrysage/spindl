import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Questionaire from '../screens/questionaire';

import MainTabNavigator from './MainTabNavigator';
import splash from '../screens/splash';

export default createSwitchNavigator(
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  {
    Home: Questionaire,
    Profile: Home
  },
  {
    initialRouteName: "Home"
  }
);
