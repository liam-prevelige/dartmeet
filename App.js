
import * as React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import MapView, { Callout, CalloutSubview, Marker } from 'react-native-maps';
import {Button as Butt} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {

  // constants for the locations of users 
  const [pin, setPin] = React.useState({
    latitude: 47.56269353206304,
    longitude: -122.37986431128218
  })
  const [user1, setUser1] = React.useState({
    latitude: 47.58055140458414,
    longitude: -122.37778347081458
  })
  const [user2, setUser2] = React.useState({
    latitude: 47.554094024744714,
    longitude: -122.37996713330165
  })
  const [user3, setUser3] = React.useState({
    latitude: 47.59292251379077,
    longitude: -122.31851731909684
  })
  const [user4, setUser4] = React.useState({
    latitude: 47.631416525536125,
    longitude: -122.31595453281194
  })
  const [user5, setUser5] = React.useState({
    latitude: 47.641461840740696,
    longitude: -122.39924460715426
  })
  const [user6, setUser6] = React.useState({
    latitude: 47.512394445083565,
    longitude: -122.36108759747839
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
  const Popup = ({name, interests, major, currentCompany, pronouns, aboutMe}) => {
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
        <Text style={{color: "#000000"}}>Pronouns: {pronouns}</Text>
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
      latitude: 47.56269353206304,
      longitude: -122.37986431128218,
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
          <Callout
          onPress={() => navigation.navigate('Profile')}
          >
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
          <StyledMarker name="Hugh D'69"/>
          <Callout
          onPress={() => navigation.navigate('Profile')}>
          <Popup 
              name="Hugh Jass D'69"
              interests="Love, Roommates"
              major="WGSS"
              pronouns="he/him"
              currentCompany="Puget Sound Publishing"
              aboutMe="Just started as an assistant publisher and looking for advice in the publishing field. Also looking for roommates who like cooking!"
              />
            <CalloutSubview>
            </CalloutSubview>
        </Callout>
        </Marker>

        <Marker coordinate={user4}>
          <StyledMarker name="Jeanie D'23"/>
          <Callout
          onPress={() => navigation.navigate('Profile')}
          >
          <Popup 
              name="Jeanie Micheals '99"
              interests="Friends"
              pronouns="she/hers"
              major="Government, Philosophy"
              currentCompany="Seattle City Hall"
              aboutMe="I've lived in Seattle for 10 years working for City Hall! Connect with me if you want someone to show you this city's secrets."
              />
            <CalloutSubview>
            </CalloutSubview>
        </Callout>
        </Marker>

        <Marker coordinate={user5}>
          <StyledMarker name="Chris D'23"/>
          <Callout
          onPress={() => navigation.navigate('Profile')}>
          <Popup 
              name="Chris Stenzil '22"
              interests="Work Advice, Referrals"
              pronouns="they/them"
              major="Economics, Government"
              currentCompany="Bain"
              aboutMe="Just started at Bain and looking for advice in moving up in the company. Would love to meet for coffee to talk about how to get a raise."
              />
            <CalloutSubview>
            </CalloutSubview>
        </Callout>
        </Marker>

        <Marker coordinate={user6}>
          <StyledMarker name="Rico D'15"/>
          <Callout
          onPress={() => navigation.navigate('Profile')}>
          <Popup 
              name="Rico Kriesler '22"
              interests="Friends"
              major="Mathematics, French"
              pronouns="he/him"
              currentCompany="Seattle Public School #14"
              aboutMe="I'm a first grade teacher at Seattle Public. I love the outdoors and am looking for hiking buddies!"
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