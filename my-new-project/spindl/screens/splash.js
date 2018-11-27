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
export default class Splash extends React.Component {
    state = {
        username: '',
        password: ''

    }

    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.header}> Dream Date!</Text>
                {/* <userStatus /> */}
            </View>
        )
    }
}

    const styles = StyleSheet.create({
        container:{
            paddingHorizontal: 10,
            paddingVertical:10
        },
        header:{
            fontSize:12,
            
        }
    })