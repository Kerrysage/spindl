import React from 'react';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

const age = [
    {label: 'Male', value: 0},
    {label: 'Female', value:1},
    {label: 'Other', value:2},
];

export default class SignUpForm extends React.Component {
    render() {
        return(
            <View style={styles.SignUpForm}>
                <Text style={styles.header}>Sign Up</Text>
                <TextInput style={styles.textInput} placeholder='Full Name' />
                <TextInput style={styles.textInput} placeholder='Email' />
                <TextInput style={styles.textInput} placeholder='Location' />
                <TextInput style={styles.textInput} placeholder='Age' />
                <TextInput style={styles.textInput} placeholder='Location' />
                <TextInput style={styles.textInput} placeholder='Password' />
                <RadioForm 
                    style= {styles.radioStyle}
                    radio_props ={age}
                    initial={-1}
                    onPress={(value) => {}}
                    buttonSize={15}
                    buttonOuterSize={20}
                    formHorizontal={true}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btnText}>Submit</Text>
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
    radioStyle: {
        fontSize:12,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
        
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