import React from "react";
import { Text, View, Image, Dimensions, Pressable } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Propertycard = ({
  rooms,
  childrens,
  Adults,
  selectedDates,
  property,
  availableRooms,
}) => {
  const { width, height } = Dimensions.get("window");
  const navigation = useNavigation();

  return (
    <View>
      <Pressable onPress={() => navigation.navigate("Propertyinfo", {
        name:property.name,
        rating:property.rating,
        oldPrice:property.oldPrice,
        newPrice:property.newPrice,
        photo:property.photos,
        room:rooms,
        availableroom:availableRooms,
        adult:Adults,
        children:childrens,
        selectedDate:selectedDates,
      })} style={{ margin: 10, flexDirection: "row", marginTop: 40 }}>
        <View>
          <Image
            style={{ height: height / 4, width: width - 280 }}
            source={{ uri: property.image }}
          />
        </View>
        <View style={{ padding: 10 }}>
          <Text style={{ fontWeight: 500 }}>{property.name}</Text>
          <View style={{ flexDirection: "row", gap: 5, marginVertical: 5 }}>
            <MaterialCommunityIcons
              name="star-circle"
              size={24}
              color="green"
            />
            <Text style={{ fontWeight: 500 }}>{property.rating}</Text>
            <View
              style={{
                backgroundColor: "#6CB4EE",
                paddingVertical: 2,
                borderRadius: 5,
                width: 100,
              }}
            >
              <Text
                style={{ textAlign: "center", color: "white", fontSize: 15 }}
              >
                Genius Level
              </Text>
            </View>
          </View>
          <Text style={{ fontWeight: "bold" }}>
            {property.address.length > 50
              ? property.address.substr(0, 25)
              : property.address}
          </Text>
          <Text>Price for 1Night, {Adults}Adults</Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                color: "red",
                textDecorationLine: "line-through",
              }}
            >
              Rs{property.oldPrice * Adults}
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              {" "}
              Rs{property.newPrice * Adults}
            </Text>
          </View>
          <Text style={{ fontSize: 16, color: "gray" }}>Deluxe Room</Text>
          <Text style={{ fontSize: 16, color: "gray" }}>
            Hotel Room : 1 bed
          </Text>
          <View
            style={{
              backgroundColor: "#6082B6",
              paddingVertical: 2,
              marginTop: 2,
              borderRadius: 5,
              width: 150,
              paddingHorizontal: 3,
            }}
          >
            <Text style={{ textAlign: "center", color: "white" }}>
              Limited Time deal
            </Text>
          </View>
        </View>
        <View>
          <Feather name="heart" size={24} color="red" />
        </View>
      </Pressable>
    </View>
  );
};

export default Propertycard;
