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
                    <View style={styles.infoTextContainer}>
                        <Text style={styles.infoText}>
                            Name: {this.state.user.name}
                        </Text>
                    </View>
                    <View style={styles.infoTextContainer}>
                        <Text style={styles.infoText}>
                            Age: {this.state.user.age}
                        </Text>
                    </View>
                    <View style={styles.infoTextContainer}>
                        <Text style={styles.infoText}>
                            Location: {this.state.user.location}
                        </Text>
                    </View>
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
        backgroundColor: 'rgba(0, 219, 255, 0.8)',
        // borderColor: 'rgba(255, 255, 255, 0.8)',
        // borderWidth: 5,
        borderRadius: 15,
        padding: 15,
        paddingTop: 20,
        paddingBottom: 20,
        marginTop: 20,
        shadowColor: 'rgba(0, 187, 206, 0.6)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,

    },
    imgContainer:{  
        shadowColor: 'rgba(0, 187, 206, 0.6)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        overflow: 'hidden',
        borderWidth: 1
    },
    img:{
        height: 150,
        width: 150,
        paddingTop: 50,
        alignItems: 'flex-start',
        borderRadius: 75,
    },
    infoContainer:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginLeft: 10, 
        // backgroundColor: 'rgba(255, 255, 255, 0.8)',
        

    },
    infoText:{
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.7)',
        paddingBottom: 10,
        paddingTop: 10,
        // borderBottomColor: "#fff",
        // borderBottomWidth: 1,
        textAlign: 'center',
        // borderColor: "#000",
    },
    infoTextContainer: {
        // borderWidth: 1,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
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
        borderRadius: 15,
    },
    btnText: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default withNavigation(HomeScreen)