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

<<<<<<< HEAD
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
=======
        <View style={{marginLeft: 150}, styles.centerItem}>
          <Text>
            Name
          </Text>
          <Text>
            Age
          </Text>
          <Text>
            Location
          </Text>
        </View>
        <View>
          <Button
            onPress={this.adding}
            title="Add New Match"
            color="#f44242"
            accessibilityLabel="Learn more about this purple button"
          />

        </View>
        <View>
          <Button
            onPress={this.adding}
            title="My Matches"
            style={styles.myMatches}
            color="#f44242"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>

      </ScrollView>
    )
  }
>>>>>>> 5144e81d0d68bc28af4b42164f3f705273053c9e
}

const styles = StyleSheet.create({
    scrollView:{
        flex: 1,
        backgroundColor: '#F98F8F'
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