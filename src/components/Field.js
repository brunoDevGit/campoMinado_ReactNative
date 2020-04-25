import React from 'react'
import { View, StyleSheet, Text, TouchableNativeFeedback,Alert } from 'react-native'
import params from '../params'
import Mine from './Mine'
import Flag from './Flag'

export default props => {
    const { mined, opened, nearMines, exploded, flagged } = props


    const styleField = [styles.field]

    if (opened) styleField.push(styles.opened)
    if (exploded) {
        
        styleField.push(styles.exploded)
    } 
    if (flagged) styleField.push(styles.flagged)
    if (!opened && !exploded) styleField.push(styles.regular)

    let color = null
    if (nearMines > 0) {
        if (nearMines == 1) color = '#2A28D7'
        if (nearMines == 2) color = '#2B520F'
        if (nearMines > 2 && nearMines < 6) color = '#ff665e'
        if (nearMines >= 6) color = '#ffb308'
    }
    return (
        <TouchableNativeFeedback onPress={props.onOpen}
            onLongPress={props.onSelect}>
            <View style={styleField}>
                {!mined && opened && nearMines > 0 ?
                    <Text style={[styles.label,
                    { color: color }]}> {nearMines} </Text> : false}
                {mined && opened ? <Mine /> : false}
                {flagged && !opened ? <Flag /> : false}
            </View>
        </TouchableNativeFeedback>
    )

}
const styles = StyleSheet.create({
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize,
    },
    regular: {
        backgroundColor: '#598935',
        borderLeftColor: '#a9d751',
        borderTopColor: '#a9d751',
        borderRightColor: '#4a752d',
        borderBottomColor: '#4a752d',


    },
    opened: {
        backgroundColor: '#e4c1a3',
        borderColor: '#C8A57F',
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontWeight: 'bold',
        fontSize: params.fontSize,

    },
    exploded: {
        backgroundColor: 'red',
        borderColor: 'red',
    }
})