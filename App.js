// import React from 'react';
// import { Text, View } from 'react-native';

// export default function App() {
//     return (
//         <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//           <Text>
//             Try editing me! 🎉
//           </Text>
//         </View>
//       );
// }


import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        {/* <Stack.Screen name="ScreenOne" component={ScreenOne} />
        <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
        <Stack.Screen name="ScreenToImplement" component={ScreenToImplement} initialParams={{message: 'Hi there!'}}  /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
