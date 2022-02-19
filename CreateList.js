import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

export default function CreateList(props) {
    const [outputText, setOutputText] = useState('Hi There!');
    return (
        <View style={styles.container}>
            <View>
                <TextInput />
                <Button title="ADD">

                </Button>
            </View>
        </View>

    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });

