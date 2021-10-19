import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FAB, IconButton, TextInput } from 'react-native-paper';
import navigation from '../navigation';
import header from '../component/header';

function AddingNote({navigation}) {
    const [noteTitle, setNoteTitle] = useState('')
    const [noteText, setNoteText] = useState('')

    function onSaveNote() {
        navigation.state.params.addNotes({noteTitle, noteText})

        navigation.goBack()
    }

    return(
        <>
        <header titleText = 'Adding a note'/>
        <IconButton 
            icon = "close"
            size = {25}
            color = 'white'
            onPress = {() => navigation.goBack()}
            style = {styles.iconButton}
        />
        <View style = {styles.container}>
            <TextInput 
                label = 'Type there title...'
                value = {noteTitle}
                mode = 'outlined'
                onChangeText = {setNoteTitle}
                style = {styles.title}
            />
            <TextInput 
                label = 'Type there text...'
                value = {noteText}
                mode = "flat"
                onChangeText = {setNoteText}
                multiline = {true}
                style = {styles.text}
                scrollEnabled = {true}
                returnKeyLabel = 'done'
                blurOnSubmit = {true}
            />
            <FAB style = {styles.fab}
                small
                icon = "check"
                disabled = {noteTitle == ''? true : false}
                label = 'Add a note'
                onPress = {() => onSaveNote()}
            />
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    iconButton: {
        backgroundColor: '#9400D3',
        position: 'absolute',
        right: 0,
        top: 40,
        margin: 10
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    title: {
        fontSize: 30,
        marginBottom: 16
    },
    text: {
        height: 300,
        fontSize: 16
    },
    fab: {
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 0
    }
});

  export default AddingNote