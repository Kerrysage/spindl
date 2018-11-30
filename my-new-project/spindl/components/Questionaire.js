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
import { withNavigation } from 'react-navigation';

// import ModalDropdown from 'react-native-modal-dropdown';

class QuestionaireForm extends React.Component {

    static navigationOptions = {
    header: null
    };

    state = {
    
    };

    clickMe = () => {
        // console.log(this.state.OutdoorSelected,this.state.IndoorSelected,this.state.FoodSelected,this.state.NightlifeSelected,this.state.MoviesSelected)
    }

    async componentDidMount() {
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

render() {
    // console.log(this.state.FoodSelected);
    return (
    <ScrollView style={styles.Questionaire}>
    <View style={styles.headerContainer}>
        <Image 
            source={{uri: 'https://placeimg.com/200/200/people'}} 
            fadeDuration={0} 
            style={styles.img}
        />
        <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Name</Text>
            <Text style={styles.infoText}>Age</Text>
            <Text style={styles.infoText}>Location</Text>
        </View>
    </View>

    <Text style={styles.titles}>Food</Text>
    <View style={styles.pickerContainer}>
        <Picker 
            selectedValue={this.state.FoodSelected} 
            style={styles.picker}
            placeholder= 'Select Favorite Food'
            onValueChange={(itemValue, itemIndex) => this.setState({FoodSelected: itemValue})}
            >   
            {/* <Picker.Item enabled="false" label="" value="" /> */}
            {this.dropDownMenu(this.state.food)}
        </Picker>
    </View>

    <View style={styles.titlesContainer}>
        <Text style={styles.titles}>Movies</Text>
    </View>

    <View style={styles.submit}>
        <Picker 
            selectedValue={this.state.MovieSelected} 
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => this.setState({MoviesSelected: itemValue})}
            >
            { this.dropDownMenu(this.state.movie) }
        </Picker>
    
    </View>

        <View style={styles.titlesContainer}>
            <Text style={styles.titles}>Indoor</Text>
        </View>
        <View style={styles.submit}>
            <Picker 
                selectedValue={this.state.IndoorSelected} 
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => this.setState({IndoorSelected: itemValue})}
                >
                { this.dropDownMenu(this.state.indoor) }
            </Picker>
        </View>

        <View style={styles.titlesContainer}>
            <Text style={styles.titles}>Outdoor</Text>
        </View>
        <View style={styles.submit}>
            <Picker 
                selectedValue={this.state.OutdoorSelected} 
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => this.setState({OutdoorSelected: itemValue})}
                >
            { this.dropDownMenu(this.state.outdoor) }
        </Picker>
        
    </View>

    <View style={styles.titlesContainer}>
        <Text style={styles.titles}>Nightlife</Text>
    </View>
        <Picker 
            selectedValue={this.state.NightlifeSelected} 
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => this.setState({NightlifeSelected: itemValue})}
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
        alignItems: 'flex-start'
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 5,
        borderTopColor: "#fff",
        borderBottomColor: '#fff',
        borderBottomWidth: 5,
        padding: 15,
        marginTop: 20,
        marginBottom: 10
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
        textAlign: 'center'
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding:20,
        backgroundColor: '#83cfc9',
        marginTop: 30,
    },
    btnText: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 16,
        fontWeight: 'bold'
    },
    pickerContainer:{
        
    },
    picker:{
        
    },


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
    infoContainer:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginLeft: 10
    },
    infoText:{
        fontSize: 16,
        color: '#fff',
        paddingBottom: 10,
        paddingTop: 10,
        borderBottomColor: "#fff",
        borderBottomWidth: 1,
        textAlign: 'center'
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
    },

})

export default withNavigation(QuestionaireForm)
