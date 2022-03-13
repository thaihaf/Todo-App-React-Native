import React from "react";
import NavigationStrings from "../contants/NavigationStrings";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

import { Categories, Home, Cart } from "../Screens";
import { Image, StyleSheet } from "react-native";
import imagePath from "../contants/imagePath";

const MainStack = () => {
  return (
    <Tab.Navigator
      initialRouteName={NavigationStrings.HOME}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#add8f6",
          borderRadius: 50,
          bottom: 10,
          marginHorizontal: 10,
          height: 65,
        },
      }}
    >
      <Tab.Screen
        name={NavigationStrings.HOME}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={imagePath.icItem}
                style={{ tintColor: focused ? "red" : "gray" }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={NavigationStrings.CATEGORIES}
        component={Categories}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={imagePath.icCategories}
                style={{ tintColor: focused ? "red" : "gray" }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={NavigationStrings.CART}
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={imagePath.icCart}
                style={{ tintColor: focused ? "red" : "gray" }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default MainStack;
