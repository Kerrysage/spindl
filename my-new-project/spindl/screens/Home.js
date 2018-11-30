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
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import {withNavigation} from 'react-navigation';

import HomeScreen from '../components/HomeScreen';

class Home extends React.Component {
    static navigationOptions = {
        header: null,
    };

    adding = () => {
        console.log('ayyeee');
    }

    render() {
    return(
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                    <Image 
                        style= {styles.images}
                        source={require('../assets/images/dd-logo.png')}
                    />
                <HomeScreen />
            </View>
        </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    scrollView:{
        flex: 1,
        backgroundColor: '#F99367'
    },
    container:{
        paddingHorizontal: 10,
        paddingVertical:10,
        paddingTop: 40,
        flexDirection: 'column',
        alignItems: 'center',
    },
    images:{
        height: 50,
        width: 100,
        paddingTop: 50,
        alignItems: 'center'
    }
})


export default withNavigation(Home)