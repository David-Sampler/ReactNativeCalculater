import React from 'react'
import { TouchableHighlight, Dimensions, View, Text, StyleSheet } from 'react-native'

const style = StyleSheet.create({
    botao: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderColor: '#888',
        borderWidth: 1
    },

    operationButton: {
        color: '#fff',
        backgroundColor: '#fa8231'

    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,
        backgroundColor: '#fa8231',
        color: '#fff'

    },

    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3
    },


})

const button = (props) => {

    const styleButtom = [style.botao]
    if (props.double) styleButtom.push(style.buttonDouble)
    if (props.triple) styleButtom.push(style.buttonTriple)
    if (props.operation) styleButtom.push(style.operationButton)

    return (

        <TouchableHighlight onPress={props.onClick}>
            <Text style={styleButtom}>{props.label}</Text>
        </TouchableHighlight>
    )
}

export default button

