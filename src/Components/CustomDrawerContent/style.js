import { StyleSheet } from "react-native";
import ColorCode from "../../Contants/ColorCode";

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#2c3e50",
		marginTop: -4,
	},
	drawerBtn: {
		marginTop: 15,
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 20,
		paddingVertical: 15,
	},
	drawerLable: {
		fontSize: 14,
		color: ColorCode.appText,
		marginHorizontal: 10,
	}
});

export default styles;
