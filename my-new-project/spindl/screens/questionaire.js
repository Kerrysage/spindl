import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View>
        <Image
         source={require('https://placeimg.com/200/200/people')}
         fadeDuration={0}
         style={{width: 20, height: 20}}
        />
     <View>
    )
  }

  const styles = StyleSheet.create( {

  })
