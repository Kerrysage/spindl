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
            <ScrollView style= {styles.scrollView}>
                <View style={styles.container}>
                    <Image 
                        style= {styles.images}
                        source={require('../assets/images/dd-logo.png')}
                    />
                    <SignInForm />
                </View>
            </ScrollView>
        )
    }
}

    const styles = StyleSheet.create({
        scrollView:{
            flex: 1,
            backgroundColor: '#F99367'
        },
        container:{
            paddingHorizontal: 10,
            paddingVertical:10,
            paddingTop: 40,
            flexDirection: 'column',
            alignItems: 'center',
        },
        images:{
            height: 100,
            width: 200,
            paddingTop: 50,
            alignItems: 'center'
        }
    })