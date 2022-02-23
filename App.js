
import * as React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import MapView, { Callout, CalloutSubview, Marker } from 'react-native-maps';
import {Button as Butt} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {

  // constants for the locations of users 
  const [pin, setPin] = React.useState({
    latitude: 47.55864303425462,
    longitude: -122.38518950588768
  })
  const [user1, setUser1] = React.useState({
    latitude: 47.57536841950295,
    longitude: -122.37660248999161
  })
  const [user2, setUser2] = React.useState({
    latitude: 47.550665501300536,
    longitude: -122.38336323883325
  })
  const [user3, setUser3] = React.useState({
    latitude: 47.59141890802103,
    longitude: -122.31629358730771
  })
  const [user4, setUser4] = React.useState({
    latitude: 47.621424556810496,
    longitude: -122.32327847726754
  })
  const [user5, setUser5] = React.useState({
    latitude: 47.63275892854295,
    longitude: -122.39278227695452
  })
  const [user6, setUser6] = React.useState({
    latitude: 47.51199567885955,
    longitude: -122.35929902504219
  })


// constant for the custom marker representing an alum's location
  const StyledMarker = ({name}) => (
    <View style = {{
      width: 60,
      height: 60, 
      borderRadius: 30, 
      borderColor: "#FFFFFF",
      backgroundColor: "#006633",
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      alignContent: 'center',
      flexWrap: 'wrap',
      textAlignVertical: "center",
      textAlign:"center"
    }}
    >
      <Text style={{color: "white"}}>{name}</Text>
    </View>
  );


  // constant for the custom popup representing an alum's information
  const Popup = ({name, interests, major, currentCompany, aboutMe}) => {
    return (
      <View style = {{
        width: (Dimensions.get('window').width)*0.8,
        height: "100%", 
        borderRadius: 30, 
        backgroundColor: "#FFFFFF",
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignContent: 'center',
        textAlign:"center"
      }}
      >
        <Text style={{fontWeight: "bold", color: "#006633"}}>{name}</Text>
        <Butt
        icon="account"
        color="#006633"
        onPress={() => navigation.navigate('Profile')}
        >
          <Text style={{
            color: "#006633",
            textDecorationLine: 'underline'
            }}>Full Profile</Text>
      </Butt>
        <Text style={{color: "#35DA29"}}>Interested in: {interests}</Text>
        <Text style={{color: "#006633"}}>Major: {major}</Text>
        <Text style={{color: "#006633"}}>Current Company: {currentCompany}</Text>
        <Text style={{fontWeight: "bold", color: "#006633"}}>About Me:</Text><Text style={{color: "#006633"}}>{aboutMe}</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#006633",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 10
    },
  });

  return (
    <View style={StyleSheet}>
    {/* setting up mapview, putting down coordinates and pins, allowing movement of the "your house pin" */}
      
      <MapView style={styles.map}     
      initialRegion={{
      latitude: 47.55864303425462,
      longitude: -122.38518950588768,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
    provider = "google"
    >
      <Marker coordinate={pin}
        pinColor="red"
      >
        <Callout>
          <Text>
            Your Location
          </Text>
        </Callout>
        </Marker>


        <Marker coordinate={user1}>
          <StyledMarker name="Tiara D'22"/>
          <Callout>
          <Popup 
              name="Tiara Jones D'22"
              interests="Friends, Work Advice"
              major="Computer Science"
              currentCompany="Microsoft"
              aboutMe="Software Engineer looking for career advice in the technology world! Also looking for friends to grab coffee and explore local concerts."
              />
        </Callout>
        </Marker>

        <Marker coordinate={user2}>
          <StyledMarker name="Casey D'18"/>
          <Callout
          onPress = {() => navigation.navigate('Profile')}>
          <Popup 
              name="Casey Monarch D'18"
              interests="Friends, Roommates"
              major="Biology"
              currentCompany="UW Biology"
              aboutMe="Plant biology researcher working understanding the complexities of iron in the photosynthesis pathway! I love being outside and am looking for friends to come on walks in the park with me :)"
              />
        </Callout>
        </Marker>

        <Marker coordinate={user3}>
          <StyledMarker name="Mitch D'21"/>
          <Callout>
          <Popup 
              name="Mitch Jefferies D'21"
              interests="Work Advice, Roommates"
              major="English, Psychology"
              currentCompany="Puget Sound Publishing"
              aboutMe="Just started as an assistant publisher and looking for advice in the publishing field. Also looking for roommates who like cooking!"
              />
            <CalloutSubview>
            </CalloutSubview>
        </Callout>
        </Marker>

        <Marker coordinate={user4}>
          <StyledMarker name="Jeanie D'23"/>
          <Callout>
          <Popup 
              name="Jeanie Micheals '22"
              interests="Friends"
              major=""
              aboutMe="Plant biology researcher working understanding the complexities of iron in the photosynthesis pathway! I love being outside and am looking for friends to come on walks in the park with me :)"
              />
            <CalloutSubview>
            </CalloutSubview>
        </Callout>
        </Marker>

        <Marker coordinate={user5}>
          <StyledMarker name="Holland D'23"/>
          <Callout>
          <Popup 
              name="Holland Resnikov '22"
              interests="Roommates"
              major="Computer Science, Art"
              aboutMe="Plant biology researcher working understanding the complexities of iron in the photosynthesis pathway! I love being outside and am looking for friends to come on walks in the park with me :)"
              />
            <CalloutSubview>
            </CalloutSubview>
        </Callout>
        </Marker>

        <Marker coordinate={user6}>
          <StyledMarker name="Larry D'15"/>
          <Callout>
          <Popup 
              name="Sarah Korb '22"
              interests="Friends, Roommates"
              major="Computer Science, Art"
              aboutMe="Plant biology researcher working understanding the complexities of iron in the photosynthesis pathway! I love being outside and am looking for friends to come on walks in the park with me :)"
              />
            <CalloutSubview>
            </CalloutSubview>
        </Callout>
        </Marker>

      </MapView>

    </View>
  );

}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Map" component={HomeScreen} />
        <Stack.Screen name="Profile" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;