import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import Home from '../screens/Home';
<<<<<<< HEAD
import SignUpPage from '../screens/SignUpPage'
=======

import SignUpPage from '../screens/SignUpPage';
>>>>>>> 44c138c4eb1e0e8e4f5263f8059dd400715a5e77
import MainTabNavigator from './MainTabNavigator';
import splash from '../screens/splash';

export default createSwitchNavigator(
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  {
    Home: splash,
    Profile: Home,
<<<<<<< HEAD
    SignUp:SignUpPage
=======
    SignUp: SignUpPage

>>>>>>> 44c138c4eb1e0e8e4f5263f8059dd400715a5e77
  },
  {
    initialRouteName: "Home"
  }
);