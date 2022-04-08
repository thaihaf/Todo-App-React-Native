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
import { SplashScreen } from "../Components";

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
	const [loading, setLoading] = useState(true)

	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const mutation = useMutation(getUser, {
		onSuccess: async (data) => {
			if (data) {
				setIsAuthenticated(true);
				context.updateUser(data);
			} else {
				setIsAuthenticated(false);
			}

			setLoading(false)
		},
		onError: async (error) => {
			setIsAuthenticated(false);
			setLoading(false);
			
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
			{loading
				? <SplashScreen />
				: (isLoggedIn || isAuthenticated
					? <DrawerNavigator />
					: <AuthNavigator />
				)
			}

		</NavigationContainer>)
}

export default AppNavContainer;