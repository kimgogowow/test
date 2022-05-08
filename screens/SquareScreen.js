import React, { useReducer } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 30;
const reducer = (state, action) => {
    //state === {red:number, green:number, blue:number};
    //action ==={color to change : amount}

    switch (action.colorToChange) {
        case 'red':
            return { ...state, red: state.red + action.amount };
        case 'green':
            return { ...state, green: state.green + action.amount };
        case 'blue':
            return { ...state, blue: state.blue + action.amount };
        default:
            return state;
    }
};
const SquareScreen = () => {
    /*  const [red, setRed] = useState(0);
     const [green, setGreen] = useState(0);
     const [blue, setBlue] = useState(0); */

    /*  const setColor = (color, change) => {
         //color ='red','xx','xx'
         //change = +15 / -15
         switch (color) {
             case 'red':
                 red + change > 255 || red + change < 0 ? null : setRed(red + change);
                 return;
             case 'green':
                 green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                 return;
             case 'blue':
                 blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                 return;
             default:
                 return;
         }
     };
     return (
         <View>
             <Text>this is square screen!</Text>
             <ColorCounter
                 color='Red'
                 onIncrease={() => setColor('red', COLOR_INCREMENT)}
                 onDecrease={() => setColor('red', - COLOR_INCREMENT)} />
             <ColorCounter
                 color='Green'
                 onIncrease={() => setColor('green', COLOR_INCREMENT)}
                 onDecrease={() => setColor('green', - COLOR_INCREMENT)} />
             <ColorCounter
                 color='Blue'
                 onIncrease={() => setColor('blue', COLOR_INCREMENT)}
                 onDecrease={() => setColor('blue', - COLOR_INCREMENT)} />
             <View
                 style={{
                     height: 150,
                     width: 150,
                     backgroundColor: `rgb(${red},${green},${blue})`
                 }} />
         </View>);
  */
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    //dispatch---run my reducer
    return (
        <View>
            <Text>this is square screen!</Text>
            <ColorCounter
                color='Red'
                onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'red', amount: -COLOR_INCREMENT })} />
            <ColorCounter
                color='Green'
                onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'green', amount: -COLOR_INCREMENT })} />
            <ColorCounter
                color='Blue'
                onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'blue', amount: -COLOR_INCREMENT })} />
            <View
                style={{
                    height: 150,
                    width: 150,
                    backgroundColor: `rgb(${state.red},${state.green},${state.blue})`
                }} />
        </View>);
};
const styles = StyleSheet.create({

});

export default SquareScreen;