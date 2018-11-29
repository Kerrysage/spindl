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
import {withNavigation} from 'react-navigation';

class HomeScreen extends React.Component {
    render() {
        return(
            <View style={styles.HomeScreen}>
                // First third of the page
                        <Image 
                        style={styles.img} 
                        source={{uri:'https://placeimg.com/200/200/people'}}
                        />
        
                        <Text style={styles.infoText}>
                            Name
                        </Text>
                        <Text style={styles.infoText}>
                            Age
                        </Text>
                        <Text style={styles.infoText}>
                            Location
                        </Text>

                // Match buttons
                
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.btnText}>Add New Match</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.btnText}>My Matches</Text>
                    </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    HomeScreen:{
        alignSelf: 'stretch'
    },
    headContainer:{

        
    },
    imgContainer:{

    },
    img:{
        height: 100,
        width: 100,
        paddingTop: 50,
        alignItems: 'flex-start' 
    },
    infoContainer:{

    },
    infoText:{
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