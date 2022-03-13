//import liraries
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import NavigationStrings from "../../../Contants/NavigationStrings";
import { Tasks } from "../../../Screens";


const TasksStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={NavigationStrings.TASKS} component={Tasks} />
    </Stack.Navigator>
  );
};

export default TasksStack;
