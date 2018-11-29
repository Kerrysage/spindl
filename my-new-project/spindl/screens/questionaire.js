import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  Picker,
  TouchableOpacity,
  View
} from 'react-native';
import {WebBrowser} from 'expo';

import {MonoText} from '../components/StyledText';

// import ModalDropdown from 'react-native-modal-dropdown';

export default class Questionaire extends React.Component {
  static navigationOptions = {
    header: null
  };

    state = {
      // food: null
    };

  clickMe = () => {
    // console.log(this.state)
  };


  componentDidMount(){
    fetch('http://10.6.69.51:3000/food')
    .then((response) => response.json())
    .then((data) => {
      // console.log(data.food[3].type)
      this.setState({
        food: data.food,
      }, function(){
      });
      // console.log(this.state);
    })
    .catch((error) =>{
      console.error(error);
      // console.log('error');
    });
  }

  foodDrop(foodItems) {
    if (foodItems !== undefined) {
      // // console.log("error")
      const testOf = foodItems.map((item) =>
        // console.log(item.type)
        <Picker.Item label={item.type} value={item.type} />
      )

        return(
          //   <Picker.Item label={item.type} value={item.type} />
          // <View>
          testOf
          // {/* </View> */}
          // console.log(testOf)

      )
      // for (var i = 0; i < foodItems.length; i++) {
      //   // console.log(foodItems[i].type);
      //   const testOf =
      // }
    }
  }


  render() {
    const fD = this.state.food
    // console.log(this.state);
    return (<ScrollView style={{
      flex: 3,
      display: 'flex',
      flexDirection: 'column'}}>
        <Image
          source={{uri:'https://placeimg.com/200/200/people'}}
          fadeDuration={0}
          style={{width: 200, height: 200,marginTop: 35, marginLeft: 25}}
          />
      <View style={styles.profile}>
        <Text style={styles.profileInfo}>
          Name
        </Text>
        <Text style={styles.profileInfo}>
          Age
        </Text>
        <Text style={styles.profileInfo}>
          Location
        </Text>

      </View>
      <View>
        {/* <Text>Food</Text> */}
        {this.foodDrop(fD)}
      </View>
      <View style={styles.submit}>
        <Picker
          selectedValue={'Food'}
          style={ {height: 50, width: 200}}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({Food: itemValue})
          }>
          <Picker.Item enabled="false" label="" value="" />
            {/* {this.foodDrop(fD)} */}

        </Picker>
        <Button title="Send It" onPress={this.clickMe}/>
      </View>
      <View style={styles.submit}>
        <Picker
          selectedValue={'Movies'}
          style={ {height: 50, width: 200}}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({Movies: itemValue})
          }>
          <Picker.Item label="Movies" value="" />
          <Picker.Item label="test" value="test" />
          <Picker.Item label="test2" value="test2" />
          <Picker.Item label="test3" value="test3" />
        </Picker>
        <Button title="Send It" onPress={this.clickMe}/>
      </View>
      <View style={styles.submit}>
        <Picker selectedValue={'Indoor'} style={{
            height: 50,
            width: 200
          }} onValueChange={(itemValue, itemIndex) => this.setState({Indoor: itemValue})
}>
          <Picker.Item label="Indoor" value=""/>
          <Picker.Item label="test" value="test"/>
          <Picker.Item label="test2" value="test2"/>
          <Picker.Item label="test3" value="test3"/>
        </Picker>
        <Button title="Send It" onPress={this.clickMe}/>
      </View>
      <View style={styles.submit}>
        <Picker
          selectedValue={'Outdoor'}
          style={ {height: 50, width: 200}}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({Outdoor: itemValue})
          }>
          <Picker.Item label="Outdoor" value="" />
          <Picker.Item label="test" value="test" />
          <Picker.Item label="test2" value="test2" />
          <Picker.Item label="test3" value="test3" />
        </Picker>
        <Button title="Send It" onPress={this.clickMe}/>
      </View>
      <View style={styles.submitFlex}>
        <Picker
          selectedValue={'Nightlife'}
          style={ {height: 50, width: 200}}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({Nightlife: itemValue})
          }>
          <Picker.Item label="Nightlife" value="" />
          <Picker.Item label="test" value="test" />
          <Picker.Item label="test2" value="test2" />
          <Picker.Item label="test3" value="test3" />
        </Picker>
        <Button title="Send It" onPress={this.clickMe}/>
      </View>
      {/* </View> */}
    </ScrollView>)
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection: 'column'
    },
    profile: {
      marginTop: 35,
      width: 100,
      height: 50,
      backgroundColor: 'powderblue',
      marginLeft: 30
    },
    profileInfo: {
      width: 100,
      height: 50,
      backgroundColor: 'powderblue',
      marginLeft: 30
    },
    outside: {
      display: 'flex',
      flexDirection: 'column'
    },
    submit: {
      // width: 100
    },
    submitFlex: {
      display: 'flex',
      flexDirection: 'row'
    },
    contentContainer: {
      paddingVertical: 20
}
  })
