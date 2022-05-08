import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.viewStyle}>
            <Text>Enter Name:</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />
            <Text>Your name is :{name}</Text>
            <Text></Text>
            <Text>Enter your passwords: </Text>
            <Text>(please set the password within 5 lengths)</Text>
            <TextInput
                style={styles.input}
                autoCorrect={false}
                autoCapitalize='none'
                value={password}
                onChangeText={(newPassword) => setPassword(newPassword)}

            />
            {password.length < 5 ? <Text>PW must be fewer than 5 char</Text> : null}
        </View>
    )

};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 10,
        borderColor: 'purple',
        flexDirection: 'column',
        alignItems: 'stretch'

    },

    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        borderTopColor: 'pink',

    }
});

export default TextScreen;