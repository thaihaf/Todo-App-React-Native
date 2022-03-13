import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import NavigationStrings from "../../../Contants/NavigationStrings";
import { Home } from "../../../Screens";

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        stackStyle: {
          backgroundColor: "#2c3e",
        },
      }}
    >
      <Stack.Screen name={NavigationStrings.HOME} component={Home} />
    </Stack.Navigator>
  );
};

export default HomeStack;
