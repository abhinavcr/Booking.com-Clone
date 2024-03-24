import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

const Header = () => {
  return (
      <View style={styles.header}>
        <Pressable style={styles.htab}>
          <Ionicons name="bed-outline" size={24} color="white" />
          <Text style={styles.htext}>Stays</Text>
        </Pressable>
        <Pressable style={styles.htab}>
          <Ionicons name="airplane-outline" size={24} color="white" />
          <Text style={styles.htext}>Flight</Text>
        </Pressable>
        <Pressable style={styles.htab}>
          <Ionicons name="car-outline" size={24} color="white" />
          <Text style={styles.htext}>Car Rental</Text>
        </Pressable>
        <Pressable style={styles.htab}>
          <FontAwesome5 name="taxi" size={24} color="white" />
          <Text style={styles.htext}>Taxi</Text>
        </Pressable>
      </View>
  );
};

const styles = StyleSheet.create({
  header: {
    //height: "17.5%",
    height: 150,
    width: "100%",
    backgroundColor: "#003580",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 100,
    paddingBottom: 10,
    borderBottomColor:"transparent",
    shadowColor:"transparent"
  },
  htext: {
    color: "#fff",
    fontWeight: 'bold',
    marginLeft: 2.5,
    fontSize: 15
  },
  htab: {
    flexDirection: "row",
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#fff",
    padding: 5,
  }
});

export default Header;
