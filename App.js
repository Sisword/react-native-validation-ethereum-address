import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {height, width} from 'react-native-dimension'
import CheckScreen from "./CheckScreen";
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers from './redux/reducers'

const store = createStore(reducers);

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <CheckScreen/>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputView: {
        height: height(10),
        width: width(80),
        backgroundColor: '#d1d9e0',
        justifyContent: 'center'
    },
    input: {
        paddingHorizontal: 10,
        flex: 1

    }
});
