// import { StatusBar } from 'expo-status-bar';
// import { doc, getDoc } from 'firebase';
import db from './firebase'
import firebase from "@firebase/app"; 

import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GiftedChat , renderMessageVideo} from 'react-native-gifted-chat';

function MessageVideo(_props) {
  console.log(_props, "this is props")
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ color: Color.alizarin, fontWeight: '600' }}>
        Video is not implemented by GiftedChat.
      </Text>
      <Text style={{ color: Color.alizarin, fontWeight: '600' }}>
        You need to provide your own implementation by using renderMessageVideo
        prop.
      </Text>
    </View>
  )
}

export default function App() {
  const [ messages, setMessages ] = useState([]);
  const [currentUser, setCurrentUser] = useState(true)
  // console.log(messages)
  // useEffect(()=>{
  //   setMessages([
  //     {
  //       _id: 1,
  //       text: 'My message',
  //       createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
  //       user: {
  //         _id: 2,
  //         name: 'React Native',
  //         avatar: 'https://facebook.github.io/react/img/logo_og.png',
  //       },
  //       image: 'https://facebook.github.io/react/img/logo_og.png',
  //       // You can also add a video prop:
  //       video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  //       // Mark the message as sent, using one tick
  //       sent: true,
  //       // Mark the message as received, using two tick
  //       received: true,
  //       // Mark the message as pending with a clock loader
  //       pending: true,
  //       // Any additional custom parameters are passed through
  //     }
  //   ])
  // },[])
  useEffect(() => {
    // db.collection("Chats")
    //   .doc("myChat1")
    //   .get()
    //   .then((snapshot) => {
    //     console.log(snapshot.id);
    //     console.log(snapshot.data());
    //   });
    
  }, []);
  const onSend = useCallback((messages= []) => {
    setMessages(previousMessages => {
      messages[0].user._id = currentUser===true ? 1:2
      setCurrentUser(prev=>prev===true? false:true)
      console.log(!currentUser)
      return GiftedChat.append(previousMessages, messages)
      
    })
 
  },[])
  return (
    <GiftedChat
      messages={messages}
      onSend= {messages => onSend(messages)}
      renderMessageVideo={ MessageVideo}
      user={{
        _id: 1,
      }}
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
