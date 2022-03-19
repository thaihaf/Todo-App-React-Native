//import liraries
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthRoutes from "../routes/AuthRoutes";

import NavigationStrings from "../../Contants/NavigationStrings";

const AuthNavigator = () => {
	const AuthStack = createNativeStackNavigator();

	return (
		<AuthStack.Navigator
			initialRouteName={NavigationStrings.SIGNIN}
			screenOptions={{
				headerShown: false,
			}}
		>
			{AuthRoutes.map((item) =>
				<AuthStack.Screen
					key={item.name}
					name={item.name}
					component={item.component}
				/>
			)}
		</AuthStack.Navigator>
	);
};

export default AuthNavigator;
