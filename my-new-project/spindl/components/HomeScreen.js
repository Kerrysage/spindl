import React from 'react';
import {
    Image,
    Button,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { AsyncStorage } from "react-native"
import { withNavigation } from 'react-navigation';
const jwtDecode = require('jwt-decode');

function log(data) {
    console.log(data);
    return data;
}

class HomeScreen extends React.Component {

    state = {
        token: '',
        user: {},
        choices: {}
    }

    retrieveToken = () => {
        if (this.state.token) return Promise.resolve(this.state.token)

        return AsyncStorage.getItem('token')
            .then(jwtDecode)
            .then(token => {
                this.setState(() => {
                    return {token: token.id} 
                })
                return token.id;
            })
    }

    getData = (token) => {
        return fetch(`https://dream-date.herokuapp.com/users/${token}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
        })
            .then(res => res.json())
    }

    getChoices = (token) => {
        return fetch(`https://dream-date.herokuapp.com/choices/${token}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
        })
        .then(res => res.json())
    }

    componentDidMount() {
        this.retrieveToken()
            .then(this.getData)
            .then(({ user }) => {
                return this.setState({ user: user[0], error: null })
            })
            .catch(err => {
                console.error(err)
                this.setState({error: err.message})
            })
    }

    matches = () => {
        this.props.navigation.navigate('Matches')
    }

    render() {
        return (
            <View style={styles.HomeScreen}>
                <View style={styles.headContainer}>
                    <Image 
                    style={styles.img} 
                    source={{uri:'https://placeimg.com/200/200/people'}}
                    />
                <View style={styles.infoContainer}>
                        <Text style={styles.infoText}>
                            Name: {this.state.user.name}
                        </Text>
                        <Text style={styles.infoText}>
                            Age: {this.state.user.age}
                        </Text>
                        <Text style={styles.infoText}>
                            Location: {this.state.user.location}
                            Choices: {this.state.choices.user_id}
                        </Text>
                    </View>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity  style={styles.button}>
                        <Text style={styles.btnText}>Add New Match</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this.matches}>
                        <Text style={styles.btnText}>My Matches</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    HomeScreen: {
        alignSelf: 'stretch'
    },
    headContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 5,
        borderTopColor: "#fff",
        borderBottomColor: '#fff',
        borderBottomWidth: 5,
        padding: 15,
        marginTop: 20
    },
    imgContainer:{  
        
    },
    img:{
        height: 150,
        width: 150,
        paddingTop: 50,
        alignItems: 'flex-start'
    },
    infoContainer:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginLeft: 10
    },
    infoText:{
        fontSize: 16,
        color: '#fff',
        paddingBottom: 10,
        paddingTop: 10,
        borderBottomColor: "#fff",
        borderBottomWidth: 1,
        textAlign: 'center'
    },
    btnContainer: {
        marginTop: 10
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f22048',
        marginTop: 30,
    },
    btnText: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default withNavigation(HomeScreen)