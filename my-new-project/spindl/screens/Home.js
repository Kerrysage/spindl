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

export default class Home extends React.Component {
  static navigationOptions = {
    header: null,
  };

  adding = () => {
    console.log('ayyeee');
  }

  render() {
    return(
      <ScrollView style={styles.center}>
      <View>

        <Image
         source={{uri:'https://placeimg.com/200/200/people'}}
         fadeDuration={0}
         style={styles.image}/>
       </View>

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
}
const styles = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: 'row',
    display: 'flex'
  },
  centerItem: {
    flexDirection: 'column',
    display: 'flex',
    // width: 120,
     backgroundColor: 'powderblue',
     left: '15%'
  },
  image: {
  width: 200,
  height: 200,
  marginTop: 35,
  marginLeft: 150,

  },
  myMatches: {
    marginTop: 250
  }
})