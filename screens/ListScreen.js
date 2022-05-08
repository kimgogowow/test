import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'friend #1', age: '20' },
        { name: 'friend #2', age: '22' },
        { name: 'friend #3', age: '24' },
        { name: 'friend #4', age: '25' },
        { name: 'friend #5', age: '30' },
        { name: 'friend #7', age: '42' },

    ];
    return (
        <FlatList
            keyExtractor={friends => friends.name}
            data={friends}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name}-Age:{item.age}</Text>;
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 20
    }
});
export default ListScreen;
