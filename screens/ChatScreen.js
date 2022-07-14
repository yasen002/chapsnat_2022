import React from 'react';
import { Text,StyleSheet, View , Button} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function ChatScreen({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor:"#4CAF50;" }}>
          <Text>
            Try editing me! 🎉
          </Text>
          <Button title="Home" onPress={() => navigation.navigate('Home')}/>
        </View>
      );
}
