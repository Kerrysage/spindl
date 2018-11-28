import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput
} from 'react-native';
import SignUpForm from '../components/SignUpForm';

//login
export default class Splash extends React.Component {
    static navigationOptions = {
        title: 'Dream Date',
    };

    state = {
        username: '',
        password: '',
        text: ''
    }

    render () {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Image 
                    style= {styles.images}
                    source={require('../assets/images/dd-logo.png')}
                    />
                    <SignUpForm />
                </View>
            </ScrollView>
        )
    }
}

    const styles = StyleSheet.create({
        container:{
            width: 'auto',
            height: '100%',
            paddingHorizontal: 10,
            paddingVertical:10,
            paddingTop: 40,
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#F98F8F'
        },
        images:{
            height: 100,
            width: 200,
            paddingTop: 50,
            alignItems: 'center'
        }
    })