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
import { withNavigation } from 'react-navigation';
import { AsyncStorage } from "react-native"
const jwtDecode = require('jwt-decode');


class Matches extends React.Component {

    state = {
        user: '',
        choices: '',
        showChoices: false,
        CharlieChoices:'',
        userArr:'',
        charlieArr:'',
        matches:''
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

    getCharilie = () => {
        return fetch(`https://dream-date.herokuapp.com/choices/4`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
        })
        .then(res => res.json())
        .then(({choices}) => this.setState({ CharlieChoices: choices[0], error: null }))
    }

    getChoices = () => {
        return fetch(`https://dream-date.herokuapp.com/choices/${this.state.token}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
        })
        .then(res => res.json())
        .then(({choices}) => this.setState({ choices: choices[0], error: null }))
    }

    grabChoices = () => {
        this.getChoices()
        .then(this.getCharilie)
        .then(this.getCharilieMatches)
        .then(this.getUserMatches)
        .then(this.findMatch)
        .then(() => this.setState({showChoices: !this.state.showChoices}))
        
        
    }

    getUserMatches = () => {
        const user = []
        const userCoices = this.state.choices
        for(key in userCoices){
            user.push(userCoices[key])
        }
        return this.setState({userArr: user})
    }

    getCharilieMatches = () => {
        const charlie = []
        const charlieChoices = this.state.CharlieChoices
        for(key in charlieChoices){
            charlie.push(charlieChoices[key])
        }
        return this.setState({charlieArr: charlie})
    }

    findMatch = () => {
        const matches = this.state.userArr.filter((item, index) => {
            return item === this.state.charlieArr[index]
        })
        const newMatches = matches.join(', ')
        return this.setState({matches: newMatches})
    }

    goHome = () => {
        this.props.navigation.navigate('Profile')
    }

    componentDidMount() {
        this.retrieveToken()
            .then(this.getData)
            .then( ({user}) => {
                return this.setState({ user: user[0], error: null })
            })
            .catch(err => {
                console.error(err)
                this.setState({error: err.message})
            })
    }
    render() {
        return (
            <ScrollView style={styles.MatchScreen}>
            <View >
                <Text style={styles.header}>My Matches</Text>
                <View style={styles.matchContainer}>
                    <View style={styles.personContainer}>
                        <Text style={styles.personText}>{this.state.user.name}</Text>
                        <Image 
                            style={styles.matchImg} 
                            source={{uri:'https://placeimg.com/200/200/people'}}
                        />
                    </View>
                    <Image 
                        style={styles.matchHeart} 
                        source={require('../assets/images/heart.png')}
                    />
                    <View style={styles.personContainer}>
                        <Text style={styles.personText}>Charlie</Text>
                        <Image 
                            style={styles.matchImg} 
                            source={{uri:'https://placeimg.com/200/200/people'}}
                        />
                    </View>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity onPress={this.grabChoices} style={styles.button}>
                        <Text style={styles.btnText}>Show Choices</Text>
                    </TouchableOpacity>
                    {this.state.showChoices ? 
                    <View>
                    <Text style={styles.personText}> Your Matches are:</Text>
                    <Text style={styles.personText}>{this.state.matches} </Text>
                    </View> : <Text></Text>}
                    <TouchableOpacity onPress={this.goHome} style={styles.button}>
                        <Text style={styles.btnText}>Return Home</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    
    MatchScreen: {
        alignSelf: 'stretch'
    },
    header:{
        fontSize: 24,
        color: '#fff',
        paddingBottom:10,
        paddingTop: 10,
        marginBottom: 20,
        marginTop: 30,
        borderBottomColor: "#fff",
        borderWidth: 4,
        borderColor: '#fff',
        alignItems: 'center',
        textAlign: 'center'
    },
    img:{
        height: 150,
        width: 150,
        paddingTop: 50,
        alignItems: 'flex-start'
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
    },
    matchContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        marginTop: 20,
        borderWidth: 3,
        borderColor: '#fff'
    },
    matchImg:{
        height: 120,
        width: 120,
        paddingTop: 50,
        alignItems: 'center',
        paddingTop: 20
    },
    matchHeart: {
        height: 50,
        width: 50,
        alignItems: 'center'
    }, 
    personContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems:'center'
    },
    personText: {
        fontSize: 20,
        color:'#fff',
        paddingBottom: 10
    }
})

export default withNavigation(Matches)