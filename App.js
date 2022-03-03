
import * as React from 'react';
import { StyleSheet, View, Text, Dimensions, Image, SafeAreaView, Button, ScrollView} from 'react-native';
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
    text: {
      fontFamily: "HelveticaNeue",
      color: "#52575D"
  },
    infoContainer: {
      alignSelf: "center",
      alignItems: "center",
      marginTop: 16
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
          onPress={() => navigation.navigate("Tiara's Profile")}
          >
          <Popup 
              name="Tiara Jones D'22"
              interests="Friends, Work Advice"
              major="Computer Science"
              pronouns="she/hers"
              currentCompany="Microsoft"
              aboutMe="Software Engineer looking for career advice in the technology world! Also looking for friends to grab coffee and explore local concerts."
              />
        </Callout>
        </Marker>

        <Marker coordinate={user2}>
          <StyledMarker name="Casey D'18"/>
          <Callout
          onPress = {() => navigation.navigate("Casey's Profile")}>
          <Popup 
              name="Casey Monarch D'18"
              interests="Friends, Roommates"
              major="Biology"
              pronouns="she/hers"
              currentCompany="UW Biology"
              aboutMe="Plant biology researcher working understanding the complexities of iron in the photosynthesis pathway! I love being outside and am looking for friends to come on walks in the park with me :)"
              />
        </Callout>
        </Marker>

        <Marker coordinate={user3}>
          <StyledMarker name="Max D'96"/>
          <Callout
          onPress={() => navigation.navigate("Max's Profile")}>
          <Popup 
              name="Max Fordham D'96"
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
          <StyledMarker name="Jeanie D'99"/>
          <Callout
          onPress={() => navigation.navigate("Jeanie's Profile")}
          >
          <Popup 
              name="Jeanie Michaels '99"
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
          onPress={() => navigation.navigate("Chris's Profile")}>
          <Popup 
              name="Chris Stenzil '23"
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
          onPress={() => navigation.navigate("Rico's Profile")}>
          <Popup 
              name="Rico Kriesler '15"
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

const Profilestyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: "Helvetica Neue",
    color: "#7818C7",
    fontWeight: "300"
},
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16
},

SideinfoContainer: {
  alignSelf: "stretch",
  alignItems: "stretch",
  marginTop: 16,
  marginLeft: 16,

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
  image: {
    flex: 1,
    height: undefined,
    width: undefined
},
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden"
},
profileButtonContainer: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between'
},
butt: {
  backgroundColor:  "#C8EEC9",
  width: '20%',
  height: 40,
  borderRadius: 10,
},
butt2: {
  backgroundColor:  "#C8EEC9",
  width: '30%',
  height: 40,
  borderRadius: 10,

},
TextinfoContainer: {
  alignSelf: "stretch",
  alignItems: "stretch",
  marginTop: 10,
  marginLeft: 10,
  marginRight: 10,
  width: '90%',
  backgroundColor: "#DCF6D4",
 

},
mediaImageContainer: {
  width: 180,
  height: 200,
  borderRadius: 12,
  overflow: "hidden",
  marginHorizontal: 10
},
image: {
  flex: 1,
  height: undefined,
  width: undefined
},

});


function CaseyDetailsScreen() {
  return (
    <SafeAreaView>
    <View style={{ alignSelf: "center" }}>
      <View style={Profilestyles.profileImage}>
          <Image source={require("./assets/profile-pic1.jpeg")} style={Profilestyles.image} resizeMode="center"></Image>
      </View>
    </View> 
    <View style={Profilestyles .infoContainer}>
    <Text style={[Profilestyles .text, { fontWeight: "300", fontSize: 30 }]}>Casey Monarch, D'18</Text>
    <Text style={[Profilestyles .text, { fontWeight: "200", fontSize: 15 }]}>She/Hers</Text>
    <Butt
        icon="map-marker-outline"
        color="#006633"
        labelStyle = {{fontSize:20}}
        >
          <Text style={{
            color: "#006633",
            fontSize: 15
            }}>Seattle, WA</Text>
      </Butt>
    <Text style={[Profilestyles .text, { color: "#AF72E0", fontSize: 20 }]}>Working at: UW Biology</Text>
    <Text style={[Profilestyles .text, { color: "#AF72E0", fontSize: 20 }]}>Major: Biology</Text>
    </View>
    <View style={Profilestyles .SideinfoContainer}>
    <Text style={[Profilestyles .text, { fontSize: 20 }]}>Looking For:</Text>
    </View>
    <View style={Profilestyles.profileButtonContainer}>
    <View style={Profilestyles.butt}>
      <Button title = "Friends" fontWeight = "200" color = "#006633" >
    </Button>
      </View>
      <View style={Profilestyles.butt}>
      <Button title = "Advice" fontWeight = "200" color = "#006633" >
    </Button>
      </View>
      <View style={Profilestyles.butt}>
      <Button title = "Work" fontWeight = "200" color = "#006633" >
    </Button>
      </View>
      <View style={Profilestyles.butt}>
      <Button title = "Love" fontWeight = "100" color = "#006633" fontSize = "5">
    </Button>
      </View>
    </View> 
    <View style={Profilestyles .SideinfoContainer}>
    <Text></Text>
    </View>
    <View style={Profilestyles .SideinfoContainer}>
    <Text style={[Profilestyles .text, { fontSize: 20 }]}>Interests:</Text>
    </View>
    <View style={Profilestyles.profileButtonContainer}>
    <View style={Profilestyles.butt}>
      <Button title = "Reading" fontWeight = "200" color = "#006633" >
    </Button>
      </View>
      <View style={Profilestyles.butt}>
      <Button title = "Hiking" fontWeight = "200" color = "#006633" >
    </Button>
      </View>
      <View style={Profilestyles.butt}>
      <Button title = "Cooking" fontWeight = "200" color = "#006633" >
    </Button>
      </View>
      <View style={Profilestyles.butt}>
      <Button title = "Theater" fontWeight = "100" color = "#006633" fontSize = "5">
    </Button>
      </View>
    </View> 
    <Text></Text>
    <Text></Text>
    <Text></Text>
    <View style={Profilestyles .SideinfoContainer}>
    <Text style={[Profilestyles .text, { fontSize: 20 }]}>Personal Statement:</Text>
    <View style={Profilestyles .TextinfoContainer}>
    <Text style={[Profilestyles .text, { fontSize: 18 }]}>Plant biology researcher working understanding the complexities of iron in the photosynthesis pathway! I love being outside and am looking for friends to come on walks in the park with me :)</Text>
    </View>
    </View>
    <View style={Profilestyles .SideinfoContainer}>
    <Text style={[Profilestyles .text, { fontSize: 20 }]}>Contact:</Text>
    </View>
    <Text></Text>
    <View style={Profilestyles.profileButtonContainer}>
    <View style={Profilestyles.butt2}>
    <Butt
        icon="chat"
        color="#006633"
        mode = "outlined"
        labelStyle = {{fontSize:40}}
        >
          <Text style={{
            color: "#006633",
            fontSize: 15
            }}>Chat</Text>
      </Butt>
      </View>
      <View style={Profilestyles.butt2}>
      <Butt
        icon="phone"
        color="#006633"
        mode = "outlined"
        labelStyle = {{fontSize:40}}
        >
          <Text style={{
            color: "#006633",
            fontSize: 15
            }}>Call</Text>
      </Butt>
      </View>
      <View style={Profilestyles.butt2}>
      <Butt
        icon="email"
        color="#006633"
        mode = "outlined"
        labelStyle = {{fontSize:40}}
        >
          <Text style={{
            color: "#006633",
            fontSize: 15
            }}>Email</Text>
      </Butt>
      </View>
      </View>
  </SafeAreaView> 
  );
}


function TiaraDetailsScreen() {
  return (
    <SafeAreaView>
    <View style={{ alignSelf: "center" }}>
      <View style={Profilestyles.profileImage}>
          <Image source={require("./assets/tiara.jpeg")} style={Profilestyles.image} resizeMode="center"></Image>
      </View>
    </View> 
    <View style={Profilestyles .infoContainer}>
    <Text style={[Profilestyles .text, { fontWeight: "300", fontSize: 30 }]}>Tiara Jones, D'22</Text>
    <Text style={[Profilestyles .text, { fontWeight: "200", fontSize: 15 }]}>She/Hers</Text>
    <Butt
        icon="map-marker-outline"
        color="#006633"
        labelStyle = {{fontSize:20}}
        >
          <Text style={{
            color: "#006633",
            fontSize: 15
            }}>Seattle, WA</Text>
      </Butt>
    <Text style={[Profilestyles .text, { color: "#AF72E0", fontSize: 20 }]}>Working at: Microsoft</Text>
    <Text style={[Profilestyles .text, { color: "#AF72E0", fontSize: 20 }]}>Major: Computer Science</Text>
    </View>
    <View style={Profilestyles .SideinfoContainer}>
    <Text style={[Profilestyles .text, { fontSize: 20 }]}>Looking For:</Text>
    </View>
    <View style={Profilestyles.profileButtonContainer}>
    <View style={Profilestyles.butt}>
      <Button title = "Friends" fontWeight = "200" color = "#006633" >
    </Button>
      </View>
      <View style={Profilestyles.butt}>
      <Button title = "Advice" fontWeight = "200" color = "#006633" >
    </Button>
      </View>
      <View style={Profilestyles.butt}>
      <Button title = "Love" fontWeight = "200" color = "#006633" fontSize = "5">
    </Button>
      </View>
    </View> 
    <View style={Profilestyles .SideinfoContainer}>
    <Text></Text>
    </View>
    <View style={Profilestyles .SideinfoContainer}>
    <Text style={[Profilestyles .text, { fontSize: 20 }]}>Interests:</Text>
    </View>
    <View style={Profilestyles.profileButtonContainer}>
    <View style={Profilestyles.butt}>
      <Button title = "Travel" fontWeight = "200" color = "#006633" >
    </Button>
      </View>
      <View style={Profilestyles.butt}>
      <Button title = "Coffee" fontWeight = "200" color = "#006633" >
    </Button>
      </View>
      <View style={Profilestyles.butt}>
      <Button title = "Soccer" fontWeight = "200" color = "#006633" >
    </Button>
      </View>
      <View style={Profilestyles.butt}>
      <Button title = "Music" fontWeight = "100" color = "#006633" fontSize = "5">
    </Button>
      </View>
    </View> 
    <Text></Text>
    <Text></Text>
    <Text></Text>
    <View style={Profilestyles .SideinfoContainer}>
    <Text style={[Profilestyles .text, { fontSize: 20 }]}>Personal Statement:</Text>
    <View style={Profilestyles .TextinfoContainer}>
    <Text style={[Profilestyles .text, { fontSize: 18 }]}>Software Engineer looking for career advice in the technology world! Also looking for friends to grab coffee and explore local concerts</Text>
    </View>
    </View>
    <Text></Text>
    <View style={Profilestyles .SideinfoContainer}>
    <Text style={[Profilestyles .text, { fontSize: 20 }]}>Contact</Text>
    </View>
    <Text></Text>
    <View style={Profilestyles.profileButtonContainer}>
    <View style={Profilestyles.butt2}>
    <Butt
        icon="chat"
        color="#006633"
        mode = "outlined"
        labelStyle = {{fontSize:40}}
        >
          <Text style={{
            color: "#006633",
            fontSize: 15
            }}>Chat</Text>
      </Butt>
      </View>
      <View style={Profilestyles.butt2}>
      <Butt
        icon="phone"
        color="#006633"
        mode = "outlined"
        labelStyle = {{fontSize:40}}
        >
          <Text style={{
            color: "#006633",
            fontSize: 15
            }}>Call</Text>
      </Butt>
      </View>
      <View style={Profilestyles.butt2}>
      <Butt
        icon="email"
        color="#006633"
        mode = "outlined"
        labelStyle = {{fontSize:40}}
        >
          <Text style={{
            color: "#006633",
            fontSize: 15
            }}>Email</Text>
      </Butt>
      </View>
      </View>
  </SafeAreaView> 
  );
}


function ChrisDetailsScreen() {
  return (
    <SafeAreaView>
    <View style={{ alignSelf: "center" }}>
      <View style={Profilestyles.profileImage}>
          <Image source={require("./assets/chris.jpeg")} style={Profilestyles.image} resizeMode="center"></Image>
      </View>
    </View> 
    <View style={Profilestyles .infoContainer}>
    <Text style={[Profilestyles .text, { fontWeight: "300", fontSize: 30 }]}>Chris Stenzil, D'23</Text>
    <Text style={[Profilestyles .text, { fontWeight: "200", fontSize: 15 }]}>They/Them</Text>
    <Butt
        icon="map-marker-outline"
        color="#006633"
        labelStyle = {{fontSize:20}}
        >
          <Text style={{
            color: "#006633",
            fontSize: 15
            }}>Seattle, WA</Text>
      </Butt>
    <Text style={[Profilestyles .text, { color: "#AF72E0", fontSize: 20 }]}>Working at: Bain</Text>
    <Text style={[Profilestyles .text, { color: "#AF72E0", fontSize: 20 }]}>Major: Economics,Government</Text>
    </View>
    <View style={Profilestyles .SideinfoContainer}>
    <Text style={[Profilestyles .text, { fontSize: 20 }]}>Looking For:</Text>
    </View>
    <View style={Profilestyles.profileButtonContainer}>
    <View style={Profilestyles.butt}>
      <Button title = "Friends" fontWeight = "200" color = "#006633" >
    </Button>
      </View>
      <View style={Profilestyles.butt}>
      <Button title = "Advice" fontWeight = "200" color = "#006633" >
    </Button>
      </View>
      <View style={[Profilestyles.butt, { width: 100}]}>
      <Button title = "Referrals" fontWeight = "200" color = "#006633" fontSize = "5">
    </Button>
      </View>
    </View> 
    <View style={Profilestyles .SideinfoContainer}>
    <Text></Text>
    </View>
    <View style={Profilestyles .SideinfoContainer}>
    <Text style={[Profilestyles .text, { fontSize: 20 }]}>Interests:</Text>
    </View>
    <View style={Profilestyles.profileButtonContainer}>
    <View style={Profilestyles.butt}>
      <Button title = "Finance" fontWeight = "200" color = "#006633" >
    </Button>
      </View>
      <View style={Profilestyles.butt}>
      <Button title = "Politics" fontWeight = "200" color = "#006633" >
    </Button>
      </View>
      <View style={Profilestyles.butt}>
      <Button title = "Hiking" fontWeight = "200" color = "#006633" >
    </Button>
      </View>
      <View style={Profilestyles.butt}>
      <Button title = "Reading" fontWeight = "100" color = "#006633" fontSize = "5">
    </Button>
      </View>
    </View> 
    <Text></Text>
    <Text></Text>
    <Text></Text>
    <View style={Profilestyles .SideinfoContainer}>
    <Text style={[Profilestyles .text, { fontSize: 20 }]}>Personal Statement:</Text>
    <View style={Profilestyles .TextinfoContainer}>
    <Text style={[Profilestyles .text, { fontSize: 18 }]}>Just started at Bain and looking for advice in moving up in the company. Would love to meet for coffee to talk about how to get a raise.</Text>
    </View>
    </View>
    <Text></Text>
    <View style={Profilestyles .SideinfoContainer}>
    <Text style={[Profilestyles .text, { fontSize: 20 }]}>Contact</Text>
    </View>
    <Text></Text>
    <View style={Profilestyles.profileButtonContainer}>
    <View style={Profilestyles.butt2}>
    <Butt
        icon="chat"
        color="#006633"
        mode = "outlined"
        labelStyle = {{fontSize:40}}
        >
          <Text style={{
            color: "#006633",
            fontSize: 15
            }}>Chat</Text>
      </Butt>
      </View>
      <View style={Profilestyles.butt2}>
      <Butt
        icon="phone"
        color="#006633"
        mode = "outlined"
        labelStyle = {{fontSize:40}}
        >
          <Text style={{
            color: "#006633",
            fontSize: 15
            }}>Call</Text>
      </Butt>
      </View>
      <View style={Profilestyles.butt2}>
      <Butt
        icon="email"
        color="#006633"
        mode = "outlined"
        labelStyle = {{fontSize:40}}
        >
          <Text style={{
            color: "#006633",
            fontSize: 15
            }}>Email</Text>
      </Butt>
      </View>
      </View>
  </SafeAreaView> 
  );
}



function RicoDetailsScreen() {
  return (
    <SafeAreaView>
    <View style={{ alignSelf: "center" }}>
      <View style={Profilestyles.profileImage}>
          <Image source={require("./assets/rico.jpeg")} style={Profilestyles.image} resizeMode="center"></Image>
      </View>
    </View> 
    <View style={Profilestyles .infoContainer}>
    <Text style={[Profilestyles .text, { fontWeight: "300", fontSize: 30 }]}>Rico, D'15</Text>
    <Text style={[Profilestyles .text, { fontWeight: "200", fontSize: 15 }]}>He/Him</Text>
    <Butt
        icon="map-marker-outline"
        color="#006633"
        labelStyle = {{fontSize:20}}
        >
          <Text style={{
            color: "#006633",
            fontSize: 15
            }}>Seattle, WA</Text>
      </Butt>
    <Text style={[Profilestyles .text, { color: "#AF72E0", fontSize: 20 }]}>Working at: Seattle Public School #14</Text>
    <Text style={[Profilestyles .text, { color: "#AF72E0", fontSize: 20 }]}>Major: Mathematics,French</Text>
    </View>
    <View style={Profilestyles .SideinfoContainer}>
    <Text style={[Profilestyles .text, { fontSize: 20 }]}>Looking For:</Text>
    </View>
    <View style={Profilestyles.profileButtonContainer}>
    <View style={Profilestyles.butt}>
      <Button title = "Friends" fontWeight = "200" color = "#006633" >
    </Button>
      </View>
      <View style={Profilestyles.butt}>
      <Button title = "Travel" fontWeight = "200" color = "#006633" >
    </Button>
      </View>
      <View style={[Profilestyles.butt, { width: 100}]}>
      <Button title = "Love" fontWeight = "200" color = "#006633" fontSize = "5">
    </Button>
      </View>
    </View> 
    <View style={Profilestyles .SideinfoContainer}>
    <Text></Text>
    </View>
    <View style={Profilestyles .SideinfoContainer}>
    <Text style={[Profilestyles .text, { fontSize: 20 }]}>Interests:</Text>
    </View>
    <View style={Profilestyles.profileButtonContainer}>
    <View style={Profilestyles.butt}>
      <Button title = "Cooking" fontWeight = "200" color = "#006633" >
    </Button>
      </View>
      <View style={Profilestyles.butt}>
      <Button title = "French" fontWeight = "200" color = "#006633" >
    </Button>
      </View>
      <View style={Profilestyles.butt}>
      <Button title = "Hiking" fontWeight = "200" color = "#006633" >
    </Button>
      </View>
      <View style={Profilestyles.butt}>
      <Button title = "Reading" fontWeight = "100" color = "#006633" fontSize = "5">
    </Button>
      </View>
    </View> 
    <Text></Text>
    <Text></Text>
    <Text></Text>
    <View style={Profilestyles .SideinfoContainer}>
    <Text style={[Profilestyles .text, { fontSize: 20 }]}>Personal Statement:</Text>
    <View style={Profilestyles .TextinfoContainer}>
    <Text style={[Profilestyles .text, { fontSize: 18 }]}>I'm a first grade teacher at Seattle Public. I love the outdoors and am looking for hiking buddies!</Text>
    </View>
    </View>
    <Text></Text>
    <View style={Profilestyles .SideinfoContainer}>
    <Text style={[Profilestyles .text, { fontSize: 20 }]}>Contact</Text>
    </View>
    <Text></Text>
    <View style={Profilestyles.profileButtonContainer}>
    <View style={Profilestyles.butt2}>
    <Butt
        icon="chat"
        color="#006633"
        mode = "outlined"
        labelStyle = {{fontSize:40}}
        >
          <Text style={{
            color: "#006633",
            fontSize: 15
            }}>Chat</Text>
      </Butt>
      </View>
      <View style={Profilestyles.butt2}>
      <Butt
        icon="phone"
        color="#006633"
        mode = "outlined"
        labelStyle = {{fontSize:40}}
        >
          <Text style={{
            color: "#006633",
            fontSize: 15
            }}>Call</Text>
      </Butt>
      </View>
      <View style={Profilestyles.butt2}>
      <Butt
        icon="email"
        color="#006633"
        mode = "outlined"
        labelStyle = {{fontSize:40}}
        >
          <Text style={{
            color: "#006633",
            fontSize: 15
            }}>Email</Text>
      </Butt>
      </View>
      </View>
  </SafeAreaView> 
  );
}



function JeanieDetailsScreen() {
  return (
    <SafeAreaView>
    <View style={{ alignSelf: "center" }}>
      <View style={Profilestyles.profileImage}>
          <Image source={require("./assets/jeanie.jpeg")} style={Profilestyles.image} resizeMode="center"></Image>
      </View>
    </View> 
    <View style={Profilestyles .infoContainer}>
    <Text style={[Profilestyles .text, { fontWeight: "300", fontSize: 30 }]}>Jeanie Michaels, D'99</Text>
    <Text style={[Profilestyles .text, { fontWeight: "200", fontSize: 15 }]}>She/Hers</Text>
    <Butt
        icon="map-marker-outline"
        color="#006633"
        labelStyle = {{fontSize:20}}
        >
          <Text style={{
            color: "#006633",
            fontSize: 15
            }}>Seattle, WA</Text>
      </Butt>
    <Text style={[Profilestyles .text, { color: "#AF72E0", fontSize: 20 }]}>Working at: Seattle City Hall</Text>
    <Text style={[Profilestyles .text, { color: "#AF72E0", fontSize: 20 }]}>Major: Government,Philosophy</Text>
    </View>
    <View style={Profilestyles .SideinfoContainer}>
    <Text style={[Profilestyles .text, { fontSize: 20 }]}>Looking For:</Text>
    </View>
    <View style={Profilestyles.profileButtonContainer}>
    <View style={Profilestyles.butt}>
      <Button title = "Travel" fontWeight = "200" color = "#006633" >
    </Button>
      </View>
      <View style={Profilestyles.butt}>
      <Button title = "Friends" fontWeight = "200" color = "#006633" >
    </Button>
      </View>
      <View style={[Profilestyles.butt, { width: 100}]}>
      <Button title = "Advice" fontWeight = "200" color = "#006633" fontSize = "5">
    </Button>
      </View>
    </View> 
    <View style={Profilestyles .SideinfoContainer}>
    <Text></Text>
    </View>
    <View style={Profilestyles .SideinfoContainer}>
    <Text style={[Profilestyles .text, { fontSize: 20 }]}>Interests:</Text>
    </View>
    <View style={Profilestyles.profileButtonContainer}>
    <View style={Profilestyles.butt}>
      <Button title = "Cooking" fontWeight = "200" color = "#006633" >
    </Button>
      </View>
      <View style={Profilestyles.butt}>
      <Button title = "Italian" fontWeight = "200" color = "#006633" >
    </Button>
      </View>
      <View style={Profilestyles.butt}>
      <Button title = "Reading" fontWeight = "200" color = "#006633" >
    </Button>
      </View>
      <View style={Profilestyles.butt}>
      <Button title = "Biking" fontWeight = "100" color = "#006633" fontSize = "5">
    </Button>
      </View>
    </View> 
    <Text></Text>
    <Text></Text>
    <Text></Text>
    <View style={Profilestyles .SideinfoContainer}>
    <Text style={[Profilestyles .text, { fontSize: 20 }]}>Personal Statement:</Text>
    <View style={Profilestyles .TextinfoContainer}>
    <Text style={[Profilestyles .text, { fontSize: 18 }]}>I've lived in Seattle for 10 years working for City Hall! Connect with me if you want someone to show you this city's secrets.</Text>
    </View>
    </View>
    <Text></Text>
    <View style={Profilestyles .SideinfoContainer}>
    <Text style={[Profilestyles .text, { fontSize: 20 }]}>Contact</Text>
    </View>
    <Text></Text>
    <View style={Profilestyles.profileButtonContainer}>
    <View style={Profilestyles.butt2}>
    <Butt
        icon="chat"
        color="#006633"
        mode = "outlined"
        labelStyle = {{fontSize:40}}
        >
          <Text style={{
            color: "#006633",
            fontSize: 15
            }}>Chat</Text>
      </Butt>
      </View>
      <View style={Profilestyles.butt2}>
      <Butt
        icon="phone"
        color="#006633"
        mode = "outlined"
        labelStyle = {{fontSize:40}}
        >
          <Text style={{
            color: "#006633",
            fontSize: 15
            }}>Call</Text>
      </Butt>
      </View>
      <View style={Profilestyles.butt2}>
      <Butt
        icon="email"
        color="#006633"
        mode = "outlined"
        labelStyle = {{fontSize:40}}
        >
          <Text style={{
            color: "#006633",
            fontSize: 15
            }}>Email</Text>
      </Butt>
      </View>
      </View>
  </SafeAreaView> 
  );
}

function MaxDetailsScreen() {
  return (
    <SafeAreaView>
    <View style={{ alignSelf: "center" }}>
      <View style={Profilestyles.profileImage}>
          <Image source={require("./assets/max.jpeg")} style={Profilestyles.image} resizeMode="center"></Image>
      </View>
    </View> 
    <View style={Profilestyles .infoContainer}>
    <Text style={[Profilestyles .text, { fontWeight: "300", fontSize: 30 }]}>Max Fordham, D'96</Text>
    <Text style={[Profilestyles .text, { fontWeight: "200", fontSize: 15 }]}>He/Him</Text>
    <Butt
        icon="map-marker-outline"
        color="#006633"
        labelStyle = {{fontSize:20}}
        >
          <Text style={{
            color: "#006633",
            fontSize: 15
            }}>Seattle, WA</Text>
      </Butt>
    <Text style={[Profilestyles .text, { color: "#AF72E0", fontSize: 20 }]}>Working at: Puget Sound Publishing</Text>
    <Text style={[Profilestyles .text, { color: "#AF72E0", fontSize: 20 }]}>Major: WGSS</Text>
    </View>
    <View style={Profilestyles .SideinfoContainer}>
    <Text style={[Profilestyles .text, { fontSize: 20 }]}>Looking For:</Text>
    </View>
    <View style={Profilestyles.profileButtonContainer}>
    <View style={Profilestyles.butt}>
      <Button title = "Love" fontWeight = "200" color = "#006633" >
    </Button>
      </View>
      <View style={Profilestyles.butt}>
      <Button title = "Travel" fontWeight = "200" color = "#006633" >
    </Button>
      </View>
      <View style={[Profilestyles.butt, { width: 100}]}>
      <Button title = "Roomates" fontWeight = "200" color = "#006633" fontSize = "5">
    </Button>
      </View>
    </View> 
    <View style={Profilestyles .SideinfoContainer}>
    <Text></Text>
    </View>
    <View style={Profilestyles .SideinfoContainer}>
    <Text style={[Profilestyles .text, { fontSize: 20 }]}>Interests:</Text>
    </View>
    <View style={Profilestyles.profileButtonContainer}>
    <View style={Profilestyles.butt}>
      <Button title = "Skiing" fontWeight = "200" color = "#006633" >
    </Button>
      </View>
      <View style={Profilestyles.butt}>
      <Button title = "Cooking" fontWeight = "200" color = "#006633" >
    </Button>
      </View>
      <View style={Profilestyles.butt}>
      <Button title = "Movies" fontWeight = "200" color = "#006633" >
    </Button>
      </View>
      <View style={Profilestyles.butt}>
      <Button title = "Music" fontWeight = "100" color = "#006633" fontSize = "5">
    </Button>
      </View>
    </View> 
    <Text></Text>
    <Text></Text>
    <Text></Text>
    <View style={Profilestyles .SideinfoContainer}>
    <Text style={[Profilestyles .text, { fontSize: 20 }]}>Personal Statement:</Text>
    <View style={Profilestyles .TextinfoContainer}>
    <Text style={[Profilestyles .text, { fontSize: 18 }]}>Just started as an assistant publisher and looking for advice in the publishing field. Also looking for roommates who like cooking!</Text>
    </View>
    </View>
    <Text></Text>
    <View style={Profilestyles .SideinfoContainer}>
    <Text style={[Profilestyles .text, { fontSize: 20 }]}>Contact</Text>
    </View>
    <Text></Text>
    <View style={Profilestyles.profileButtonContainer}>
    <View style={Profilestyles.butt2}>
    <Butt
        icon="chat"
        color="#006633"
        mode = "outlined"
        labelStyle = {{fontSize:40}}
        >
          <Text style={{
            color: "#006633",
            fontSize: 15
            }}>Chat</Text>
      </Butt>
      </View>
      <View style={Profilestyles.butt2}>
      <Butt
        icon="phone"
        color="#006633"
        mode = "outlined"
        labelStyle = {{fontSize:40}}
        >
          <Text style={{
            color: "#006633",
            fontSize: 15
            }}>Call</Text>
      </Butt>
      </View>
      <View style={Profilestyles.butt2}>
      <Butt
        icon="email"
        color="#006633"
        mode = "outlined"
        labelStyle = {{fontSize:40}}
        >
          <Text style={{
            color: "#006633",
            fontSize: 15
            }}>Email</Text>
      </Butt>
      </View>
      </View>
  </SafeAreaView> 
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Map" component={HomeScreen} />
        <Stack.Screen name="Casey's Profile" component={CaseyDetailsScreen} />
        <Stack.Screen name="Tiara's Profile" component={TiaraDetailsScreen} />
        <Stack.Screen name="Chris's Profile" component={ChrisDetailsScreen} />
        <Stack.Screen name="Rico's Profile" component={RicoDetailsScreen} />
        <Stack.Screen name="Jeanie's Profile" component={JeanieDetailsScreen} />
        <Stack.Screen name="Max's Profile" component={MaxDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
