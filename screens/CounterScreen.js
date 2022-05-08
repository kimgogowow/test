import React, { useReducer } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
const Varis = 10;
const reducer = (state, action) => {
    //state===={count: number}
    //action==={type: increment||decrement, payload:15}
    switch (action.type) {
        case 'Increase':
            return { ...state, count: state.count + action.payload };
        case 'Decrease':
            return { ...state, count: state.count - action.payload };
        default:
            return state;
        //...state means update to the current state value
    }
}
const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    return <View>
        <Button
            title='Increase'
            onPress={() => dispatch({ type: 'Increase', payload: Varis })} />
        <Button
            title='Decrease'
            onPress={() => dispatch({ type: 'Decrease', payload: Varis })} />
        <Text> Counter = {state.count}</Text>
    </View>
}
const style = StyleSheet.create({})
export default CounterScreen;