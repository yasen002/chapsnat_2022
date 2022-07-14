import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}> Home! </Text>
      <Button title="Open side bar" onPress={() => navigation.openDrawer()} />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}> Notifications! </Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  screenText: {
    fontSize: 32,
  },
});