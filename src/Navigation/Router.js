import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";


import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();
import { CustomDrawerContent } from "../Components/index";

import MainDrawer from "./DrawerRoutes";
import { AccountTab, ProfileTab } from "./Tab";
import NavigationStrings from "../Contants/NavigationStrings";
import ColorCode from "../Contants/ColorCode";

export default function Router() {
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: ColorCode.appBackgound,
    },
  };

  return (
    <NavigationContainer theme={navTheme}>
      <Drawer.Navigator
        initialRouteName={NavigationStrings.HOME_TABS}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          drawerInactiveTintColor: "white",
        }}
      >
        {MainDrawer.map((drawer) => (
          <Drawer.Screen
            key={drawer.name}
            name={drawer.name}
            component={drawer.component}
            options={{
              drawerIcon: ({ focused }) => {
                return (
                  <MaterialIcons
                    name={drawer.iconName}
                    size={26}
                    color={
                      focused ? ColorCode.activeColor : ColorCode.inActiveColor
                    }
                  />
                );
              },
              drawerLabel: drawer.lable,
            }}
          />
        ))}

        <Drawer.Screen
          name={NavigationStrings.PROFILE_TABS}
          component={ProfileTab}
          options={{
            // drawerItemStyle: { height: 0 },
          }}
        />
        <Drawer.Screen
          name={NavigationStrings.ACCOUNT_TABS}
          component={AccountTab}
          options={
            {
              // drawerItemStyle: { height: 0 }
            }
          }
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
