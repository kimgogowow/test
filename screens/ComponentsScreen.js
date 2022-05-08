import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const ComponentsScreen = (props) => {
    const intro = <Text style={styles.SubheaderStyle}>hi there ! this is kim creating the world!</Text>;
    return <View>
        <Text style={styles.HeaderStyle}>This is the components screen</Text>
        {intro}
        <Text style={styles.SubheaderStyle2}>美好世界❤️</Text>
        <Button
            onPress={() => props.navigation.navigate('Home')}
            title='Go to Home'
        />


    </View>
}
const styles = StyleSheet.create({
    HeaderStyle: {
        fontSize: 45,
        color: 'black'
    },
    SubheaderStyle: {
        fontSize: 20,
        color: 'green'
    },
    SubheaderStyle2: {
        fontSize: 30,
        color: 'red'
    }
});

export default ComponentsScreen;