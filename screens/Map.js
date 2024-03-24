import React, { useEffect, useRef, useRoute } from "react";
import { View, Pressable, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";

const Map = () => {
  const route = useRoute();
  console.log(route);
  const mapView = useRef(null);
  const coordinate = [];
  const details = route.params.place.map((item) =>
    item.properties.map((prop) => {
      coordinate.push({
        latitude: Number(prop.latitude),
        longitude: Number(prop.longitude),
      });
    })
  );
  console.log(details);
  useEffect(() => {
    mapView.current.fitToCoordinates(coordinate, {
      edgePadding: {
        top: 200,
        bottom: 200,
        left: 200,
        right: 200,
      },
    });
  }, []);

  return (
    <View>
      <MapView ref={mapView} style={{ height: "100%", width: "100%" }}>
        {route.params.place.map((item) =>
          item.properties.map((properties) => (
            <Marker
              title={properties.name}
              coordinate={{
                latitude: Number(properties.latitude),
                longitude: Number(properties.latitude),
              }}
            >
              <Pressable
                style={{
                  backgroundColor: "#003580",
                  paddingHorizontal: 7,
                  paddingVertical: 4,
                  borderRadius: 4,
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    color: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  {properties.rating}
                </Text>
              </Pressable>
            </Marker>
          ))
        )}
      </MapView>
    </View>
  );
};

export default Map;
