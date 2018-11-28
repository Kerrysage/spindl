import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default class SignInForm extends React.Component {
    render() {
        return(
            <View style={styles.SignInForm}>
                <Text style={styles.header}>Sign In</Text>
                <TextInput style={styles.textInput} placeholder='Email' />
                <TextInput style={styles.textInput} placeholder='Password' secureTextEntry={true}/>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btnText}>Sign In</Text>
                </TouchableOpacity>
                <Text 
                    style={styles.link}
                    onPress={() => LinkingIOS.openURL('http://google.com')}>
                    Create New Account
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    SignInForm: {
        alignSelf: 'stretch',
        marginBottom: 20
    },
    header:{
        fontSize: 24,
        color: '#fff',
        paddingBottom:10,
        paddingTop: 10,
        marginBottom:30,
        marginTop: 40,
        borderBottomColor: "#fff",
        borderWidth: 3,
        borderColor: '#fff',
        alignItems: 'center',
        textAlign: 'center'
    },
    textInput:{
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#fff',
        borderBottomColor: "#f8f8f8",
        borderBottomWidth: 1,
    },
    link:{
        color: '#579AD3',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 20,
        textAlign: 'center',
        paddingTop: 30,
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding:20,
        backgroundColor: '#59cbbd',
        marginTop: 30,
    },
    btnText: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 16,
        fontWeight: 'bold'
    }

})