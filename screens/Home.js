import React, { useLayoutEffect, useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  Alert,
} from "react-native";
import Header from "./components/Header";
import {
  FontAwesome,
  FontAwesome5,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";
import Datepicker from "react-datepicker";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  BottomModal,
  ModalButton,
  ModalContent,
  ModalFooter,
  ModalTitle,
  SlideAnimation,
} from "react-native-modals";

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [childrens, setChildrens] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const route = useRoute();
  const navigation = useNavigation();
  console.log(route.params);

  useLayoutEffect =
    (() => {
      navigation.setOptions({
        headerShown: true,
        title: "Booking.com",
        headerTitleStyle: {
          fontSize: 25,
          fontWeight: "bold",
          color: "#fff",
        },
        headerStyle: {
          backgroundColor: "#003580",
        },
        headerRight: () => {
          <Ionicons
            name="notifications-outline"
            size={24}
            color="#fff"
            style={{ marginRight: 15 }}
          />;
        },
      });
    },
    []);

  const searchPlace = (place) => {
    if (!route.params || !selectedDate) {
      Alert.alert("Invalid Details", "Please enter all the details", [
        {
          text: "Cancel",
          onPress: console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Ok",
          onPress: console.log("Ok pressed"),
          style: "default",
        },
      ]);
    }

    if (route.params && selectedDate) {
      navigation.navigate("Place", {
        Room: rooms,
        Adult: adults,
        Children: childrens,
        SelectedDate: selectedDate,
        Place: place,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.form}>
          <Pressable
            onPress={navigation.navigate("Search")}
            style={styles.input}
          >
            <FontAwesome name="search" size={24} color="black" />
            <TextInput
              style={{ marginLeft: 10 }}
              placeholder={
                route?.params ? route.params.Area : "Enter your destination"
              }
            />
          </Pressable>
          <Pressable style={styles.input}>
            <FontAwesome name="calendar" size={24} color="black" />
            <Datepicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              placeholder="Oct 10,2023 -> Dec 15,2023"
            />
          </Pressable>
          <Pressable
            style={styles.input}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <FontAwesome5 name="user" size={24} color="black" />
            <TextInput
              style={{ marginLeft: 10 }}
              placeholderTextColor={"red"}
              placeholder={`${rooms}rooms.${adults}adults.${childrens}childrens`}
            />
          </Pressable>
          <Pressable
            onPress={() => searchPlace(route?.params.Area)}
            style={{
              backgroundColor: "#003580",
              flex: 1,
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#fff", textAlign: "center" }}>Search</Text>
          </Pressable>
        </View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 25,
            marginLeft: 20,
            marginBottom: 10,
          }}
        >
          Travel More Spend Less
        </Text>
        <ScrollView horizontal showsVerticalScrollIndicator={false}>
          <View style={styles.box}>
            <Text style={{ fontWeight: "bold", fontSize: 20, color: "#fff" }}>
              Genius
            </Text>
            <Text style={{ fontWeight: "bold", color: "#fff" }}>
              You are at genius level 1 in our loyalty program
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={{ fontWeight: "bold", fontSize: 20, color: "#fff" }}>
              15% Discounts
            </Text>
            <Text style={{ fontWeight: "bold", color: "#fff" }}>
              Complete 5 stays to unlock genius level 2
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={{ fontWeight: "bold", fontSize: 20, color: "#fff" }}>
              15% Discounts
            </Text>
            <Text style={{ fontWeight: "bold", color: "#fff" }}>
              Complete 5 stays to unlock genius level 2
            </Text>
          </View>
        </ScrollView>
        <View style={styles.img}>
          <Image
            source={require("./assets/Logo.png")}
            style={{ height: 50, width: 200, resizeMode: "cover" }}
          />
        </View>
      </ScrollView>
      <BottomModal
        swipeThreshold={100}
        onBackDropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={["up", "down"]}
        modalTitle={
          <ModalTitle
            title="Select rooms and guest"
            textStyle={{ fontSize: 20, fontWeight: "bold" }}
            align="center"
          />
        }
        footer={
          <ModalFooter>
            <ModalButton
              text="Apply"
              align="center"
              textStyle={{ color: "#fff", fontWeight: "bold", fontSize: 15 }}
              style={{ backgroundColor: "#003580" }}
              onPress={() => setModalVisibile(!modalVisibile)}
            />
          </ModalFooter>
        }
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        onHardwareBackPress={() => setModalVisible(!modalVisible)}
        visible={modalVisible}
        onTouchOutside={() => setModalVisible(!modalVisible)}
      >
        <ModalContent style={{ width: "100%", height: 200 }}>
          <View
            style={{
              marginVertical: 10,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Rooms</Text>
            <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
              <Pressable onPress={() => setRooms(Math.max(1, rooms - 1))}>
                <AntDesign name="minuscircle" size={20} color="black" />
              </Pressable>
              <Text
                style={{
                  fontWeight: "bold",
                  marginHorizontal: 5,
                  fontSize: 20,
                }}
              >
                {rooms}
              </Text>
              <Pressable onPress={() => setRooms((c) => c + 1)}>
                <AntDesign name="pluscircle" size={20} color="black" />
              </Pressable>
            </Pressable>
          </View>
          <View
            style={{
              marginVertical: 10,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Adults</Text>
            <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
              <Pressable onPress={() => setRooms(Math.max(1, rooms - 1))}>
                <AntDesign name="minuscircle" size={20} color="black" />
              </Pressable>
              <Text
                style={{
                  fontWeight: "bold",
                  marginHorizontal: 5,
                  fontSize: 20,
                }}
              >
                {rooms}
              </Text>
              <Pressable onPress={() => setRooms((c) => c + 1)}>
                <AntDesign name="pluscircle" size={20} color="black" />
              </Pressable>
            </Pressable>
          </View>
          <View
            style={{
              marginVertical: 10,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Childrens</Text>
            <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
              <Pressable onPress={() => setRooms(Math.max(1, rooms - 1))}>
                <AntDesign name="minuscircle" size={20} color="black" />
              </Pressable>
              <Text
                style={{
                  fontWeight: "bold",
                  marginHorizontal: 5,
                  fontSize: 20,
                }}
              >
                {rooms}
              </Text>
              <Pressable onPress={() => setRooms((c) => c + 1)}>
                <AntDesign name="pluscircle" size={20} color="black" />
              </Pressable>
            </Pressable>
          </View>
        </ModalContent>
      </BottomModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Platform.OS === "android" ? 25 : 10,
  },
  form: {
    borderWidth: 5,
    borderRadius: 5,
    borderColor: "#4db6f7",
    height: 210,
    marginHorizontal: 20,
    marginVertical: 15,
  },
  input: {
    padding: 10,
    flexDirection: "row",
    borderBottomWidth: 5,
    borderColor: "#4db6f7",
  },
  box: {
    height: 150,
    width: 185,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#BEBEBE",
    padding: 15,
    textAlign: "center",
    marginLeft: 20,
    backgroundColor: "#003580",
  },
  img: {
    marginTop: 45,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
