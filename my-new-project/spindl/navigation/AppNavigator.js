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
<<<<<<< HEAD
    Home: splash,
    Profile: Home,
    SignUp: SignUpPage,
    Matches: MatchPage
    
=======
    Home: Questionaire,
    Profile: Home
>>>>>>> 5144e81d0d68bc28af4b42164f3f705273053c9e
  },
  {
    initialRouteName: "Home"
  }
);
