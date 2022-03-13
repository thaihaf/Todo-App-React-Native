import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

import { MaterialIcons } from "@expo/vector-icons";

import ProfileTabRoutes from "./ProfileTabRoutes";
import ColorCode from "../../../Contants/ColorCode";

const ProfileTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#add8f6",
          borderTopEndRadius: 15,
          borderTopStartRadius: 15,
          height: 60,
        },
      }}
    >
      {ProfileTabRoutes.map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <MaterialIcons
                  name={tab.iconName}
                  size={26}
                  color={
                    focused ? ColorCode.activeColor : ColorCode.inActiveColor
                  }
                />
              );
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default ProfileTab;
