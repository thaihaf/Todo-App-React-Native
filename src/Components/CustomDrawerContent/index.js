import React from "react";
import {
	DrawerContentScrollView,
} from "@react-navigation/drawer";

import { MaterialIcons } from "@expo/vector-icons";

import DrawerContentTop from "./DrawerContentTop/DrawerContentTop";
import DrawerRoutes from "../../Navigation/routes/DrawerRoutes"

import styles from "./style";
import { Text, TouchableOpacity } from "react-native";

export default CustomDrawerContent = (props) => {
	return (
		<DrawerContentScrollView {...props} style={styles.container}>
			<DrawerContentTop {...props} />

			{DrawerRoutes.map(drawer => (
				<TouchableOpacity
					activeOpacity={0.5}
					onPress={() => props.navigation.navigate(drawer.name)}
					style={styles.drawerBtn}
					key = {drawer.name}
				>
					<MaterialIcons
						name={drawer.iconName}
						size={27}
						color="white"
					/>
					<Text style={styles.drawerLable}>{drawer.lable}</Text>
				</TouchableOpacity>
			))}

		</DrawerContentScrollView>
	);
};
