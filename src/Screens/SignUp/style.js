import { StyleSheet } from "react-native";
import ColorCode from "../../Contants/ColorCode";

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	title: {
		marginTop: 50,
		fontWeight: "bold",
		fontSize: 30,
		textTransform: "capitalize",
		alignSelf: "center",
		color: ColorCode.appText,
	},
	caption: {
		marginTop: 10,
		fontSize: 20,
		textTransform: "capitalize",
		alignSelf: "center",
		width: "60%",
		textAlign: "center",
		color: ColorCode.appText,
	},
	formGroups: {
		marginTop: 20,
	},
	primaryBtn: {
		borderColor: ColorCode.primaryBgButton,
		marginBottom: 30,
	},
	primaryBtnText: {
		textTransform: "uppercase",
	},
	loginLink: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginTop: "auto",
	},
	loginText: {
		color: ColorCode.appText,
	},
	loginBtnText: {
		color: "green",
	},
});

export default styles;
