import React from 'react';
import {StyleSheet, TouchableOpacity, View, TextInput, Text, Alert} from 'react-native';
import {height, width} from 'react-native-dimension'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as validationActions from './redux/actions/validationActions'
import EthereumAddressCheck from 'ethereum-address'

class CheckScreen extends React.Component {
    state = {
        validText: ''
    };

    _onText = (value) => {
        this.props.validationActions.walletValue(value);

    };

    isAddress = (value) => {
        if (EthereumAddressCheck.isAddress(value)) {
            this.setState({validText: ''}, () => {
                Alert.alert(
                    'Error',
                    value + '\nValid ethereum address.',
                    [
                        {text: 'OK'},
                    ],
                    {cancelable: false}
                )


            });
        }
        else {
            this.setState({validText: 'Invalid wallet address'});
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputView}>
                    <Text style={{color:'red'}}>{this.state.validText}</Text>
                    <TextInput style={styles.input}
                               onChangeText={this._onText}
                               underlineColorAndroid={'transparent'}
                    />

                </View>

                <TouchableOpacity style={styles.button} onPress={() => {
                    this.isAddress(this.props.walletValue.value)
                }}>
                    <Text style={styles.text}>Check</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    walletValue: JSON.parse(JSON.stringify(state.validationReducer)),
});

const mapDispatchToProps = dispatch => ({
    validationActions: bindActionCreators(validationActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
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
    },
    button: {
        marginTop: height(20),
        height: height(10),
        width: width(50),
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 20
    }
});
