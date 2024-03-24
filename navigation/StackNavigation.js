import React from "react";
import { AntDesign, Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Place from "../screens/Place";
import Map from "../screens/Map";
import Propertyinfo from "../screens/Propertyinfo";

const Navigation = () => {
    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();
    
    function Bottomtab() {
        return (
            <Tab.Navigator>
                <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: "Home",
                    headerShown: false,
                    tabBarIcon: ({focus}) => {
                        focus ? (
                            <Entypo name="home" size={24} color="#4db6f7" />
                        ):(
                            <AntDesign name="home" size={24} color="black" />
                        )
                    }
                }}/>
                <Tab.Screen
                name="Save"
                component={Save}
                options={{
                    tabBarLabel: "Save",
                    headerShown: false,
                    tabBarIcon: ({focus}) => {
                        focus ? (
                            <AntDesign name="heart" size={24} color="#4db6f7" />
                        ):(
                            <AntDesign name="hearto" size={24} color="black" />
                        )
                    }
                }}
                />
                <Tab.Screen
                name="Booking"
                component={Booking}
                options={{
                    tabBarLabel: "Booking",
                    headerShown: false,
                    tabBarIcon: ({focus}) => {
                        focus ? (
                            <Ionicons name="notifications" size={24} color="#4db6f7" />
                        ):(
                            <Ionicons name="notifications-outline" size={24} color="black" />
                        )
                    }
                }}
                />
                <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: "Profile",
                    headerShown: false,
                    tabBarIcon: ({focus}) => {
                        focus ? (
                            <Ionicons name="person" size={24} color="#4db6f7" />
                        ):(
                            <Ionicons name="person-outline" size={24} color="black" />
                        )
                    }
                }}
                />
            </Tab.Navigator>
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
                <Stack.Screen name="Search" component={Search} options={{headerShown:false}}/>
                <Stack.Screen name="Place" component={Place} options={{headerShown:false}}/>
                <Stack.Screen name="Main" component={Bottomtab} options={{headerShown:false}}/>
                <Stack.Screen name="Map" component={Map} options={{headerShown:false}}/>
                <Stack.Screen name="Propertyinfo" component={Propertyinfo} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;