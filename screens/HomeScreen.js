import React, { useState, useEffect } from "react";
import { FlatList, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import db from "../firebase";

export default function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>
	  <TouchableOpacity
	    onPress={() => navigation.navigate("Chat")}
	  >
          	<Text >This is Home Screen </Text>
          </TouchableOpacity> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent:'center', 
    curser: 'pointer',
    padding:'50'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});