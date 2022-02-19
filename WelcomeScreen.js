import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function WelcomeScreen(props) {
    const [outputText, setOutputText] = useState('Hi There!');
    return (
        <View style={styles.container}>
            <Text>{outputText}</Text>
            <Button title="Click here to get started!" onPress={() => setOutputText('Welcome to the app!')}/>
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
});
