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
import { withNavigation } from 'react-navigation';
import { AsyncStorage } from "react-native"
const jwtDecode = require('jwt-decode');

// import ModalDropdown from 'react-native-modal-dropdown';

class QuestionaireForm extends React.Component {

    static navigationOptions = {
    header: null
    };

    state = {
        FoodSelected: '',
        MoviesSelected: '',
        IndoorSelected: '',
        OutdoorSelected: '',
        NightlifeSelected: '',
        user: ''
    };

    clickMe = () => {
        console.log(this.state.user)
        return fetch (`https://dream-date.herokuapp.com/choices`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'Application/json; charset=utf-8'
            },
            body: JSON.stringify({
            "user_id": this.state.user[0].id,   
            "movie_choice1": this.state.MoviesSelected,
            "food_choice1": this.state.FoodSelected,
            "indoor_choice1": this.state.IndoorSelected,
            "outdoor_choice1": this.state.OutdoorSelected,
            "night_life_choice1": this.state.NightlifeSelected
            })
        })
        .then(response => response.json())
        .then(response => {
            if(response.error){
                alert(response.error)
            } else {
                this.props.navigation.navigate('Profile')
            }
        })
    }

    async componentDidMount() {
        const storage = await AsyncStorage.getItem('token')
        const decode = await jwtDecode(storage)
        const token = await decode.id
        const getUser = await fetch(`https://dream-date.herokuapp.com/users/${token}`)
        const user = await getUser.json()
        this.setState({
            user: user.user
        },
        function(){
            
        })
        const foodResponse = await fetch("https://dream-date.herokuapp.com/food")
        const food = await foodResponse.json()
        this.setState({
            food: food.food,
        }, 
        function(){
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
    userInfo(user) {
        if (user !== undefined) {
            return (
                <View style={styles.infoContainer}>
                    <View style={styles.infoTexTContainer}>
                        <Text style={styles.infoText}>Name: {this.state.user.name}</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoText}>Age: {this.state.user.age}</Text>
                    </View>
                    <View style={styles.infoTexTContainer}>
                        <Text style={styles.infoText}>Location: {this.state.user.location}</Text>
                    </View>
                    
                </View>
            )
        }
    }

render() {
    return (
        <ScrollView style={styles.Questionaire}>
        <View style={styles.headerContainer}>
            <Image 
                source={{uri: 'https://placeimg.com/200/200/people'}} 
                fadeDuration={0} 
                style={styles.img}
            />
            {this.userInfo(this.state.user)}
        </View>

        <Text style={styles.titles}>Favorite Type of Food?</Text>
            <View style={styles.pickerContainer}>
                <Picker 
                    selectedValue={this.state.FoodSelected} 
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => this.setState({FoodSelected: itemValue})}
                    itemStyle={{color: "#494141", alignItems: 'center', fontSize:24 }}
                    >   
                    {/* <Picker.Item enabled="false" label="" value="" /> */}
                    {this.dropDownMenu(this.state.food)}
                </Picker>
            </View>

        <View style={styles.titlesContainer}>
            <Text style={styles.titles}>Favorite Genre of Movies?</Text>
        </View>

        <View style={styles.submit}>
            <Picker 
                selectedValue={this.state.MovieSelected} 
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => this.setState({MoviesSelected: itemValue})}
                itemStyle={{color: "#494141", alignItems: 'center', fontSize:24 }}
                >
                { this.dropDownMenu(this.state.movie) }
            </Picker>
        
        </View>

            <View style={styles.titlesContainer}>
                <Text style={styles.titles}>Favorite Indoor Activities?</Text>
            </View>
            <View style={styles.submit}>
                <Picker 
                    selectedValue={this.state.IndoorSelected} 
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => this.setState({IndoorSelected: itemValue})}
                    itemStyle={{color: "#494141", alignItems: 'center', fontSize:24 }}
                    >
                    { this.dropDownMenu(this.state.indoor) }
                </Picker>
            </View>

            <View style={styles.titlesContainer}>
                <Text style={styles.titles}>Favorite Outdoor Activities?</Text>
            </View>
            <View style={styles.submit}>
                <Picker 
                    selectedValue={this.state.OutdoorSelected} 
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => this.setState({OutdoorSelected: itemValue})}
                    itemStyle={{color: "#494141", alignItems: 'center', fontSize:24 }}
                    >
                { this.dropDownMenu(this.state.outdoor) }
            </Picker>
            
        </View>

        <View style={styles.titlesContainer}>
            <Text style={styles.titles}>Nightlife?</Text>
        </View>
            <Picker 
                selectedValue={this.state.NightlifeSelected} 
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => this.setState({NightlifeSelected: itemValue})}
                itemStyle={{color: "#494141", alignItems: 'center', fontSize:24 }}
            >
                { this.dropDownMenu(this.state.nightlife) }
            </Picker>
            <TouchableOpacity style={styles.button} onPress={this.clickMe}> 
                <Text style={styles.btnText}>Send It</Text>
            </TouchableOpacity>
        </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    Questionaire: { 
        alignSelf: 'stretch'
    },
    img:{
        height: 150,
        width: 150,
        paddingTop: 50,
        alignItems: 'flex-start',
        borderRadius: 75,
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'rgba(0, 219, 255, 0.8)',
        // borderColor: 'rgba(255, 255, 255, 0.8)',
        // borderWidth: 5,
        borderRadius: 15,
        padding: 15,
        paddingTop: 20,
        paddingBottom: 20,
        marginTop: 20,
        shadowColor: 'rgba(0, 187, 206, 0.6)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    titlesContainer:{
        marginBottom: 10
    },
    titles:{
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
        textAlign: 'center',
        backgroundColor: '#ec4760',
        borderRadius: 15,
        overflow: 'hidden',
        shadowColor: 'rgba(0, 187, 206, 0.6)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding:20,
        backgroundColor: '#83cfc9',
        marginTop: 30,
        borderRadius: 15
    },
    btnText: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 24,
        fontWeight: 'bold'
    },
    pickerContainer:{
        
    },
    picker:{
        backgroundColor: '#fef4f4',
        color: '#ef508c'
    },
    infoContainer:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginLeft: 10
    },
    infoTextContainer: {
        // borderWidth: 1,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    infoText:{
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.7)',
        paddingBottom: 10,
        paddingTop: 10,
        // borderBottomColor: "#fff",
        // borderBottomWidth: 1,
        textAlign: 'center',
        // borderColor: "#000",
    },

})

export default withNavigation(QuestionaireForm)
