import db from "./firebase";
import { onSnapshot ,setDoc, updateDoc, doc, arrayUnion} from 'firebase/firestore';
import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';


export default function App() {
  const [ messages, setMessages ] = useState([]);

  useEffect(() => {
    let unsubscribeFromNewSnapshots = onSnapshot(doc(db, "Chats", "myChat1"), (snapshot) => {
      console.log("New Snapshot! ", snapshot.data().messages);
      setMessages(snapshot.data().messages);
    });
  
    return function cleanupBeforeUnmounting() {
      unsubscribeFromNewSnapshots();
    };
  }, []);


  const onSend = useCallback(async (messages = []) => {
    console.log('the new message')
    await updateDoc(doc(db, "Chats", "myChat1"), {
      messages: arrayUnion(messages[0])
    });
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
}, [])


  return (
    <GiftedChat
      messages={messages}
      onSend= {msg => onSend(msg)}
      user={{
        _id: "1",
        name: 'Yasen',
        avatar: "https://picsum.photos/200"
      }}
      placeholder={"please type something here..."}
      showUserAvatar={true}
      alwaysShowSend={true}
      renderUsernameOnMessage={true}
    />
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


