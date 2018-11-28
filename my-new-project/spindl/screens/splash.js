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
            <View style={styles.container}>
                {/* <Text style={styles.header}> Dream Date!</Text> */}
                <Image 
                style= {styles.images}
                source={require('../assets/images/dd-logo.png')}
                />
                {/* <userStatus /> */}
                <TextInput
                    style={styles.signIn}
                    placeholder="Username"
                    onChangeText={(text) => this.setState({text})}
                    />
                <Text style={styles.text}>
                    {this.state.text}
                </Text>

            </View>
            
        )
    }
}

    const styles = StyleSheet.create({
        container:{
            width: '100%',
            height: '`100%',
            paddingHorizontal: 10,
            paddingVertical:10,
            paddingTop: 40,
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#F7A5A7'
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
        signIn: {
            height: 40,
            paddingTop: 100,
            alignItems: 'center',
            justifyContent: 'center',
            color: 'black',
            borderColor: '#d6d7da'
        },
        text:{
            padding: 10, 
            fontSize: 16
        }
        
    })