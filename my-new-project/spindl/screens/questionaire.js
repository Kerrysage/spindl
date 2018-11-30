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
    console.log(this.state.OutdoorSelected,this.state.IndoorSelected,this.state.FoodSelected,this.state.NightlifeSelected,this.state.MovieSelected)
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


export default withNavigation(Questionaire)
