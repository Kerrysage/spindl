import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Questionaire from '../screens/questionaire';

import SignUpPage from '../screens/SignUpPage';
import MainTabNavigator from './MainTabNavigator';
import splash from '../screens/splash';
import MatchPage from '../screens/MatchPage';

export default createSwitchNavigator(
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  {
    Home: splash,
    Profile: Home,
    SignUp: SignUpPage,
    Matches: MatchPage
    
  },
  {
    initialRouteName: "Home"
  }
);
