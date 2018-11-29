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
import {withNavigation} from 'react-navigation';
const jwtDecode = require('jwt-decode');
class HomeScreen extends React.Component {

    state = {
        token: '',
        user: {}
    }

    consoleLog = () => {
        
        console.log(this.state)
    }

    retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('token');
            if (value !== null) {
                const decoded = jwtDecode(value)
                return this.setState(
                    () => {
                        return {
                            token: decoded
                    }
                }
            )
        }
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount(){
        this.retrieveData()
        fetch(`https://dream-date.herokuapp.com/users${this.state.token.id}`,{
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
        }) 
        .then(response => response.json())
        .then(response => {
            return this.setState(
                () => {
                    return {
                        user: response
                    }
                }
            )
        })
        
    }

    render() {
        return(
            <View style={styles.HomeScreen}>
                <View style={styles.headContainer}>
                    {/* <View style={styles.imgContainer}> */}
                        <Image 
                        style={styles.img} 
                        source={{uri:'https://placeimg.com/200/200/people'}}
                        />
                    {/* </View> */}
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoText}>
                            Name
                        </Text>
                        <Text style={styles.infoText}>
                            Age
                        </Text>
                        <Text style={styles.infoText}>
                            Location
                        </Text>
                    </View>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity onPress={this.consoleLog} style={styles.button}>
                        <Text style={styles.btnText}>Add New Match</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.btnText}>My Matches</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    HomeScreen:{
        alignSelf: 'stretch'
    },
    headContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth: 2,
        borderColor: "#fff",
        padding:10,
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
        paddingBottom:10,
        paddingTop: 10,
        borderBottomColor: "#fff",
        borderBottomWidth: 1,
        textAlign: 'center'
    },
    btnContainer:{
    },
    button:{
        alignSelf: 'stretch',
        alignItems: 'center',
        padding:20,
        backgroundColor: '#ec4760',
        marginTop: 30,
    },
    btnText:{
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default withNavigation(HomeScreen)