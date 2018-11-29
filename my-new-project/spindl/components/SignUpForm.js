import React from 'react';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import { AsyncStorage } from "react-native"

const age = [
    {label: 'Male', value: 'M'},
    {label: 'Female', value:'F'},
    {label: 'Other', value:'O'},
];
class SignUpForm extends React.Component {
    state = {
        name: '',
        email: '',
        location: '',
        age: 0,
        password: '',
        gender: ''
    }

    storeData = async (token) => {
        try {
          await AsyncStorage.setItem('token', token);
        } catch (error) {
          console.log(error)
        }
      }

    signUp = () => {
        if((this.state.email !== '') && (this.state.password !== '')){
            return fetch ('https://dream-date.herokuapp.com/auth/signup', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'Application/json; charset=utf-8'
                },
                body: JSON.stringify({
                    'name': this.state.name,
                    'email': this.state.email,
                    "gender": this.state.gender,
                    'location': this.state.location,
                    'age': this.state.age,
                    'password':this.state.password,
                })
            })
            .then(response => response.json())
            .then(response => {
                if(response.error){
                    alert(response.error)
                } else {
                    return this.storeData(response.token)
                    .then( () => this.props.navigation.navigate('Profile'))
                }
            })
        } else {
            return alert('Please make sure all fields are filled out')
        }
    }

    render() {
        return(
            <View style={styles.SignUpForm}>
                <Text style={styles.header}>Sign Up</Text>
                <TextInput onChangeText={(inputText) => {
                    this.setState(
                        () => {
                            return {
                                name: inputText
                            }
                        }
                    )
                }}
                style={styles.textInput} placeholder='Full Name' />
                <TextInput onChangeText={(inputText) => {
                    this.setState(
                        () => {
                            return {
                                email: inputText
                            }
                        }
                    )
                }}
                style={styles.textInput} placeholder='Email' />
                <TextInput onChangeText={(inputText) =>{ 
                    this.setState(
                        () => {
                            return {
                                location: inputText
                            }
                        }
                    )
                }}
                style={styles.textInput} placeholder='Location' />
                <TextInput onChangeText={(inputText) =>{ 
                    this.setState(
                        () => {
                            return {
                                age: inputText
                            }
                        }
                    )
                }}
                style={styles.textInput} placeholder='Age' />
                <TextInput onChangeText={(inputText) =>{ 
                    this.setState(
                        () => {
                            return {
                                password: inputText
                            }
                        }
                    )
                }}
                style={styles.textInput} placeholder='Password' />
                <RadioForm onChangeText={(inputText) =>{ 
                    this.setState(
                        () => {
                            return {
                                gender: value
                            }
                        }
                    )
                }}
                    style= {styles.radioStyle}
                    radio_props ={age}
                    initial={-1}
                    buttonSize={15}
                    buttonOuterSize={20}
                    formHorizontal={true}
                    onPress={(value) => {this.setState({gender:value})}}
                />
                <TouchableOpacity onPress={this.signUp} style={styles.button}>
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

export default withNavigation(SignUpForm);