import React, { useState, useCallback, useEffect } from "react";
import { FlatList, Text, View, TouchableOpacity, StyleSheet } from "react-native";


export default function ChatScreen({ navigation }) {
 

  return (
    <View style={styles.container}>
	  <TouchableOpacity
	    onPress={() => navigation.navigate("Home")}
	  >
          	<Text >This is Chat Screen </Text>
          </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent:'center'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});