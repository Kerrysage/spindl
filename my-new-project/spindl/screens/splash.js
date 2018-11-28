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
    TextInput
} from 'react-native';
import SignUpForm from '../components/SignUpForm';
import SignInForm from '../components/SignInForm';


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
                    <SignInForm />
                    <Text 
                        style={styles.link}
                        onPress={() => LinkingIOS.openURL('http://google.com')}>
                        Create New Account
                        </Text>
                </View>
            


            </ScrollView>
        )
    }
}

    const styles = StyleSheet.create({
        container:{
            width: '100%',
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
        },
        header:{
            fontSize:12,
        },
        link:{
            color: '#579AD3',
            fontSize: 16,
            fontWeight: '600',
            marginBottom: 20,
        },
        signIn: {
            height: 40,
            paddingTop: 100,
            alignItems: 'center',
            justifyContent: 'center',
            color: 'black',
            borderRadius: 50,
            borderWidth: 0.5,
            borderColor: '#d6d7da'
        },
        text:{
            padding: 10, 
            fontSize: 16
        }
        
    })