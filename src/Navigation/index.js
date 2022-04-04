import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";

import * as SecureStore from 'expo-secure-store';
import Toast from "react-native-toast-message";

import ColorCode from "../Contants/ColorCode";

import { AuthNavigator, DrawerNavigator } from "./navigator"
import { useMutation } from "react-query";
import Context from "../Helpers/Context";
import { navigationRef } from "./RootNavigation";
import { getUser } from "../Ultils/userApi";

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: ColorCode.appBackgound,
  },
};

const AppNavContainer = () => {
  const context = useContext(Context);
  const isLoggedIn = !!context.user.id;
	console.log("home");

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const mutation = useMutation(getUser, {
    onSuccess: async (data) => {
      if (data) {
        setIsAuthenticated(true);

        context.updateUser(data);

        Toast.show({
          type: "success",
          text1: "Welcome back! 👋",
          text2: "Hello",
          visibilityTime: 5000,
        });
      } else {
        setIsAuthenticated(false);
      }
    },
    onError: async (error) => {
      setIsAuthenticated(false);

      Toast.show({
        type: "error",
        text1: error.response.data.message,
        text2: `Code : ${error.response.data.code}`,
        visibilityTime: 5000,
      });
    },
  });

  const getUsers = async () => {
    mutation.mutate(await SecureStore.getItemAsync("userID"))
  };

  useEffect(() => {
    getUsers();
  }, [isLoggedIn])

  return (
    <NavigationContainer
      theme={navTheme}
      ref={navigationRef}
    >
      {isLoggedIn || isAuthenticated
        ? <DrawerNavigator />
        : <AuthNavigator />}
    </NavigationContainer>)
}

export default AppNavContainer;