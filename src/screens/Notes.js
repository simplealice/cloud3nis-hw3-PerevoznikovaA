import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { FAB, List } from 'react-native-paper';
import header from '../component/header';
import AddingNote from './AddingNote';

function Notes({navigation}) {
    const [notes, setNotes] = useState([])

    const addNotes = note => {
        note.id = notes.length + 1
        setNotes([...notes, note])
    }

    return(
        <>
        <header titleText = 'My notes'/>
        <View style = {styles.container}>
            { notes.length === 0 ? (
                <View style = {styles.titleContainer}>
                    <Text style = {styles.title}>Nothing here...</Text>
                </View>
            ) : (
                <FlatList
                    data = {notes}
                    renderItem = {({item}) => (
                        <List.Item 
                            title = {item.noteTitle}
                            text = {item.noteText}
                            textNumberOfLines = {1}
                            titleStyle = {styles.listTitle}
                        />
                    )}

                    keyExtractor = {item => item.id.toString()}
                />
            )}
            
            <FAB style = {styles.fab}
                small
                icon = 'plus'
                label = 'Add a note'
                onPress = {() => navigation.navigate('AddingNote', {
                                addNotes
                            })
                }
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
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    title: {
        fontSize: 30
    },
    fab: {
        backgroundColor: '#9400D3',
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 10
    },
    listTitle: {
        fontSize: 20
    }
  });

  export default Notes