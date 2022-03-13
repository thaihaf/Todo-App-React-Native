//import liraries
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import NavigationStrings from "../../../Contants/NavigationStrings";
import { Categories, CategoriesItem } from "../../../Screens";

const CategoriesStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={NavigationStrings.CATEGORIES}
        component={Categories}
      />
      <Stack.Screen name={NavigationStrings.ITEMS} component={CategoriesItem} />
    </Stack.Navigator>
  );
};

export default CategoriesStack;
