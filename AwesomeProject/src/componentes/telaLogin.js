import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Tela extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.bigBlue}>Login
                {this.props.numero}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        justifyContent:'center',
        alignItems:'center'
        
    },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});
