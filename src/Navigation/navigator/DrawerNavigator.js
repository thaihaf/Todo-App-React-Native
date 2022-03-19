import React from "react";

import { MaterialIcons } from "@expo/vector-icons";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { CustomDrawerContent } from "../../Components/index";

import NavigationStrings from "../../Contants/NavigationStrings";
import ColorCode from "../../Contants/ColorCode";
import IconStrings from "../../Contants/IconStrings";

import HomeNavigator from "./HomeNavigator";

const DrawerNavigator = () => {
	const Drawer = createDrawerNavigator();

	return (
		<Drawer.Navigator
			initialRouteName={NavigationStrings.HOME}
			drawerContent={
				(props) =>
					<CustomDrawerContent {...props} />
			}

			screenOptions={{
				headerShown: false,
				drawerInactiveTintColor: "white",
				drawerType : "front"
			}}
		>
			<Drawer.Screen
				name={NavigationStrings.HOME}
				component={HomeNavigator}
				options={{
					drawerIcon: ({ focused }) => {
						return (
							<MaterialIcons
								name={IconStrings.icHome}
								size={26}
								color={
									focused ? ColorCode.activeColor : ColorCode.inActiveColor
								}
							/>
						);
					},
					drawerLabel: NavigationStrings.HOME,
				}}
			/>

		</Drawer.Navigator>
	);
}

export default DrawerNavigator;