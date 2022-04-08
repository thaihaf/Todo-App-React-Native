import { StyleSheet } from "react-native";
import ColorCode from "../../Contants/ColorCode";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		padding: 30,
	},
	topActions: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		color: ColorCode.appText
	},
	info: {
		marginTop: 20,
		width: "100%",
	},
	avt: {
		width: 90,
		height: 90,
		alignSelf: "center",
	},
	name: {
		alignSelf: "center",
		marginTop: 10,
		fontSize: 20,
		fontWeight: "bold",
		color: ColorCode.appText
	},
	primaryBtn: {
		width: "80%",
		borderRadius: 30,
	},


});

export default styles;
