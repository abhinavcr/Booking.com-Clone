// import React from "react";
// import { Navigation } from "./navigation/StackNavigation";
// import { ModalPortal } from "react-native-modals";

// const App = () => {
//   return (
//     //<>
//       <Navigation />
//       //<ModalPortal />
//     //</>
//   );
// };

// export default App





// import React from "react";
// import { TouchableOpacity, View } from "react-native";

// const RadioButton = () => {
//   return (
//     <View style={{ flex: 1, alignItem: "center" }}>
//       <TouchableOpacity>
//         <View>
//           <View></View>
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default RadioButton;




import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "./DrawerNavigation/Home";
import About from "./DrawerNavigation/About";

const Drawernavigation = () => {
  const Drawer = createDrawerNavigator();

  return (
    // <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="About" component={About}/>
      </Drawer.Navigator>
    // </NavigationContainer>
  )
}

export default Drawernavigation;






