//import liraries
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import NavigationStrings from "../../../Contants/NavigationStrings";
import { EditProfile, Profile } from "../../../Screens";

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        stackStyle: {
          backgroundColor: "#2c3e",
        },
      }}
    >
      <Stack.Screen
        name={NavigationStrings.PROFILE}
        component={Profile}
      />
      <Stack.Screen
        name={NavigationStrings.EDIT_PROFILE}
        component={EditProfile}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
