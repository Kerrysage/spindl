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
                <Text as='h1'> Spindl</Text>
                {/* <userStatus /> */}
            </View>
        )
    }
}



export default splash 