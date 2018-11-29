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
  };

  clickMe = () => {
    console.log(this.state.OutdoorSelected,this.state.IndoorSelected,this.state.FoodSelected,this.state.NightlifeSelected,this.state.MoviesSelected)
  }

  async componentDidMount() {
    const foodResponse = await fetch("https://dream-date.herokuapp.com/food")
    const food = await foodResponse.json()
    this.setState({
          food: food.food,
        }, function(){
        })
    const movieResponse = await fetch("https://dream-date.herokuapp.com/movie")
    const movie = await movieResponse.json()
    this.setState({
          movie: movie.genre,
        }, function(){
        })

    const indoorResponse = await fetch("https://dream-date.herokuapp.com/indoor")
    const indoor = await indoorResponse.json()
    this.setState({
          indoor: indoor.activity,
        }, function(){
        })

    const outdoorResponse = await fetch("https://dream-date.herokuapp.com/outdoor")
    const outdoor = await outdoorResponse.json()
    this.setState({
          outdoor: outdoor.activity,
        }, function(){
        })

    const nightlifeResponse = await fetch("https://dream-date.herokuapp.com/nightlife")
    const nightlife = await nightlifeResponse.json()
    this.setState({
          nightlife: nightlife.activity,
        }, function(){
        })
  }


  dropDownMenu(activity) {
    if (activity !== undefined) {
      var activityList = activity.map((item => {
        return <Picker.Item key={item.id} label={item.type} value={item.type}/>
      }))
      return (activityList)
    }
  }

  render() {
<<<<<<< HEAD
    return (
    <ScrollView style={{
      flex: 3, 
      display: 'flex',
      flexDirection: 'column'}}>

        <Image
          source={{uri:'https://placeimg.com/200/200/people'}}
          fadeDuration={0}
          style={{width: 200, height: 200,marginTop: 35, marginLeft: 25}}
          />

      <View style={styles.profile}>
=======
    // console.log(this.state.FoodSelected);
    return (<ScrollView style={{
        flex: 3,
        display: 'flex',
        flexDirection: 'column'
      }}>
      <Image source={{
          uri: 'https://placeimg.com/200/200/people'
        }} fadeDuration={0} style={{
          width: 200,
          height: 200,
          marginTop: 35,
          marginLeft: 25
        }}/>
      <View >
>>>>>>> 5144e81d0d68bc28af4b42164f3f705273053c9e
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

<<<<<<< HEAD
=======
      <View>
        <Text>Food</Text>
      </View>
>>>>>>> 5144e81d0d68bc28af4b42164f3f705273053c9e
      <View style={styles.submit}>
        <Picker selectedValue={this.state.FoodSelected} style={{
            height: 50,
            width: 200
          }} onValueChange={(itemValue, itemIndex) => this.setState({FoodSelected: itemValue})
}>
          {/* <Picker.Item enabled="false" label="" value="" /> */}
          {this.dropDownMenu(this.state.food)}
        </Picker>
        <Button title="Send It" onPress={this.clickMe}/>
      </View>

<<<<<<< HEAD
=======
      <View>
        <Text>Movies</Text>
      </View>
>>>>>>> 5144e81d0d68bc28af4b42164f3f705273053c9e
      <View style={styles.submit}>
        <Picker selectedValue={this.state.MovieSelected} style={{
            height: 50,
            width: 200
          }} onValueChange={(itemValue, itemIndex) => this.setState({MoviesSelected: itemValue})
}>
          { this.dropDownMenu(this.state.movie) }
        </Picker>
        <Button title="Send It" onPress={this.clickMe}/>
      </View>

      <View>
        <Text>Indoor</Text>
      </View>
      <View style={styles.submit}>
<<<<<<< HEAD

        <Picker selectedValue={'Indoor'} style={{
            height: 50,
            width: 200
          }} onValueChange={(itemValue, itemIndex) => this.setState({Indoor: itemValue})
        }>
          <Picker.Item label="Indoor" value=""/>
          <Picker.Item label="test" value="test"/>
          <Picker.Item label="test2" value="test2"/>
          <Picker.Item label="test3" value="test3"/>
=======
        <Picker selectedValue={this.state.IndoorSelected} style={{
            height: 50,
            width: 200
          }} onValueChange={(itemValue, itemIndex) => this.setState({IndoorSelected: itemValue})
}>
          { this.dropDownMenu(this.state.indoor) }
>>>>>>> 5144e81d0d68bc28af4b42164f3f705273053c9e
        </Picker>
    
        <Button title="Send It" onPress={this.clickMe}/>
      </View>

<<<<<<< HEAD
=======
      <View>
        <Text>Outdoor</Text>
      </View>
>>>>>>> 5144e81d0d68bc28af4b42164f3f705273053c9e
      <View style={styles.submit}>
        <Picker selectedValue={this.state.OutdoorSelected} style={{
            height: 50,
            width: 200
          }} onValueChange={(itemValue, itemIndex) => this.setState({OutdoorSelected: itemValue})
}>
          { this.dropDownMenu(this.state.outdoor) }
        </Picker>
        <Button title="Send It" onPress={this.clickMe}/>
      </View>
<<<<<<< HEAD
      
=======

      <View>
        <Text>Nighlife</Text>
      </View>
>>>>>>> 5144e81d0d68bc28af4b42164f3f705273053c9e
      <View style={styles.submitFlex}>
        <Picker selectedValue={this.state.NightlifeSelected} style={{
            height: 50,
            width: 200
          }} onValueChange={(itemValue, itemIndex) => this.setState({NightlifeSelected: itemValue})
}>
          { this.dropDownMenu(this.state.nightlife) }
        </Picker>
        <Button title="Send It" onPress={this.clickMe}/>
      </View>
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
