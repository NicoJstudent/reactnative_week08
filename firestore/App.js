import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Button, TextInput, View } from 'react-native';
import { firestore, collection, addDoc, MESSAGES } from './firebase/Config';

export default function App() {
  const [newMessage, setNewMessage] = useState('')

  const save = async() => {
    const docRef = await addDoc(collection(firestore, MESSAGES), {
      text: newMessage
    })
    setNewMessage('')
    console.log('Message saved.')
  }

  return (
    <View style={styles.container}>
      <TextInput placeholder="Send message..." value={newMessage} onChangeText={text => setNewMessage(text)} />
      <Button title="Send" type="button" onPress={save} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
