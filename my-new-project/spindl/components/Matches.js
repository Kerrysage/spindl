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


class Matches extends React.Component {

    render() {
        return (
            <View style={styles.MatchScreen}>
                <Text style={styles.header}>My Matches</Text>
                <View style={styles.matchContainer}>
                    <View style={styles.personContainer}>
                        <Text style={styles.personText}>Dan</Text>
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
                    <TouchableOpacity onPress={this.consoleLog} style={styles.button}>
                        <Text style={styles.btnText}>Add New Match</Text>
                    </TouchableOpacity>
                </View>
            </View>
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