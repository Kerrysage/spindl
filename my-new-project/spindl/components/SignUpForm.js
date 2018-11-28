import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default class SignUpForm extends React.Component {
    render() {
        return(
            <View style={styles.SignUpForm}>
                <Text style={styles.header}>Sign Up</Text>
                <TextInput style={styles.textInput} placeholder='Full Name' />
                <TextInput style={styles.textInput} placeholder='Email' />
                <TextInput style={styles.textInput} placeholder='Password' />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btnText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    SignUpForm: {
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
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding:20,
        backgroundColor: '#59cbbd',
        marginTop: 30,
    },
    btnText: {
        color: '#fff',
        fontWeight: 'bold'
    }

})