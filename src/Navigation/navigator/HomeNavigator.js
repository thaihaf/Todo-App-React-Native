import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NavigationStrings from "../../Contants/NavigationStrings";

import HomeRoutes from "../routes/HomeRoutes";


const HomeNavigator = () => {
	const HomeStack = createNativeStackNavigator();

	return (
		<HomeStack.Navigator
			initialRouteName={NavigationStrings.HOME}
			screenOptions={{
				headerShown: false,
			}}
		>
			{HomeRoutes.map((item) =>
				<HomeStack.Screen
					key={item.name}
					name={item.name}
					component={item.component}
					// options={item.options && item.options}
				/>
			)}
		</HomeStack.Navigator>
	);
};

export default HomeNavigator;
