import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FlatList, Pressable, View, Image, Text } from "react-native";

const Searchresult = ({Data, Input, SetInput}) => {
   const navigation = useNavigation();

    return (
        <View>
            <FlatList data={Data} renderItem={({item}) => {
              if(item.place.toLowerCase().includes(Input.toLowerCase())){
                if(Input === ""){
                    return null;
                }
                return (
                    <Pressable 
                    onPress={() => {
                        SetInput(item.place)
                        navigation.navigate("Home", {Area:item.place})
                    }}
                     style={{flexDirection:'row',paddingHorizontal:15,paddingVertical:10}}>
                        <View style={{marginRight:10}}>
                            <Image style={{height:75,width:75}} source={{uri:item.placeImage}} />
                        </View>
                        <View>
                            <Text style={{fontSize:15, fontWeight:'500'}}>{item.place}</Text>
                            <Text style={{marginVertical:5}}>{item.shortDescription}</Text>
                            <Text style={{fontSize:15, color:'grey'}}>{item.properties.length} Properties</Text>
                        </View>
                    </Pressable>
                )
              }
            }}/>
        </View>
    );
}

export default Searchresult;



