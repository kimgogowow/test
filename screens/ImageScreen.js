import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return <View>
        <ImageDetail
            title='forest'
            ImageSource={require('../../assets/forest.jpg')}
            score={'10'}
        />
        <ImageDetail
            title='beach'
            ImageSource={require('../../assets/beach.jpg')}
            score={'8'}
        />
        <ImageDetail
            title='mountain'
            ImageSource={require('../../assets/mountain.jpg')}
            score={'7'}
        />
    </View>
}
const styles = StyleSheet.create({})
export default ImageScreen;