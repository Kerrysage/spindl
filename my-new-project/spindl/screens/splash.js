import React from 'react';
import userStatus from './userStatus'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

//login
class splash extends React.Component {
    state = {
        username: '',
        password: ''

    }
    render () {
        return (
            <View>
                <userStatus />
                <Text> Hello </Text>
            </View>
        )
    }
}



export default splash 