import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";

const HomeScreen = (props) => {
  return <View>
    <Text style={styles.text}>Hi there！
      This is the home page</Text>
    <Button
      onPress={() => props.navigation.navigate('Components')}
      title='Go to component page' />
    <Button
      onPress={() => props.navigation.navigate('List')}
      title='Go to list page' />
    <Button
      onPress={() => props.navigation.navigate('Image')}
      title='Go to image page' />
    <Button
      onPress={() => props.navigation.navigate('Counter')}
      title='Go to counter page' />
    <Button
      onPress={() => props.navigation.navigate('Color')}
      title='Go to Color page' />
    <Button
      onPress={() => props.navigation.navigate('Square')}
      title='Go to Square page' />
    <Button
      onPress={() => props.navigation.navigate('Text')}
      title='Go to Text page' />
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

