import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar, Title } from 'react-native-paper';

function header({titleText}) {
    return (
        <Appbar.Header style = {styles.headerContainer}>
            <View style = {styles.container}>
                <Title style = {styles.title}>{titleText}</Title>
            </View>
        </Appbar.Header>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
      backgroundColor: '#9400D3'
    },
    container: {
        flex: 1,
        // backgroundColor: '#242424',
        alignItems: 'center',
        justifyContent: 'center',
      },
    title: {
        // fontSize: 30,
        color: '#fff'
    }
});

export default header