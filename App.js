import * as React from 'react';
import MapView, { Callout, Circle, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function App() {
  const [pin, setPin] = React.useState({
    latitude: 37.72587510682851,
    longitude: -122.46631812180071
  })
  // Commented out because it was part of the search bar that I couldn't get working
  // const [region, setRegion] = React.useState({
  //   latitude: 37.72587510682851,
  //   longitude: -122.46631812180071,
  //   latitudeDelta: 0.0922,
  //   longitudeDelta: 0.0421
  // })
  const distancebtw = computeDistance([37.72662773200411, -122.46718976077723], [pin.latitude, pin.longitude])
  return (
    <View style={StyleSheet}>
      {/* Commented out because it was part of the search bar that I couldn't get working */}
      <GooglePlacesAutocomplete
      placeholder='Search'
      fetchDetails = {true}
      GooglePlacesSearchQuery = {{
        rankby: "distance"
      }}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
        setRegion({
          latitude: details.geometry.location.lat,
          longitude: details.geometry.location.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        })
      }}
      query={{
        key: 'AIzaSyDHirkuADyUizD8-Jua7_cyV95zL8zadHw',
        language: 'en',
        // components: "country:us",
        // types: "establishment",
        // radius: "10000",
        // location: `${region.latitude}, ${region.longitude}`
      }}
      styles={{
        container: { flex: 0, position: "absolute", width: "100%", zIndex: 1},
        listView: {backgroundColor: "white" }
      }}
    />
    {/* setting up mapview, putting down coordinates and pins, allowing movement of the "your house pin" */}
      <MapView style={styles.map}     
      initialRegion={{
      latitude: 37.72662773200411,
      longitude: -122.46718976077723,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
    provider = "google"
    >
      <Marker coordinate={{
        latitude: 37.72662773200411,
        longitude: -122.46718976077723
      }}
        pinColor="purple"
      >
        <Callout>
          <Text>
            Piper's House
          </Text>
        </Callout>
        </Marker>
        <Circle center={{
          latitude: 37.72662773200411,
          longitude: -122.46718976077723
        }}
          radius={500}
          >
        </Circle>

        <Marker coordinate={pin}
        pinColor="red"
        draggable = {true}
        onDragStart = {(e) => {
          console.log("Drag start", e.nativeEvent.coordinates)
        }}
        onDragEnd = {(e) => {
          setPin({
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude
          })
          const distancebtw = computeDistance([37.72662773200411, -122.46718976077723], [pin.latitude, pin.longitude])
        }}
      >
        <Callout>
          <Text>
            Your House is {distancebtw.toFixed(2)} km from Piper's House
          </Text>
        </Callout>
        </Marker>
        <Circle center={pin}
          radius={500}
          >
        </Circle>
      </MapView>

    </View>
  );
}

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
});

function computeDistance([prevLat, prevLong], [lat, long]) {
  const prevLatInRad = toRad(prevLat);
  const prevLongInRad = toRad(prevLong);
  const latInRad = toRad(lat);
  const longInRad = toRad(long);

  return (
    // In kilometers
    6377.830272 *
    Math.acos(
      Math.sin(prevLatInRad) * Math.sin(latInRad) +
        Math.cos(prevLatInRad) * Math.cos(latInRad) * Math.cos(longInRad - prevLongInRad),
    )
  );
}

function toRad(angle) {
  return (angle * Math.PI) / 180;
}