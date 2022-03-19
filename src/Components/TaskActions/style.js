import { Dimensions, StyleSheet } from "react-native";
import ColorCode from "../../Contants/ColorCode";

const styles = StyleSheet.create({
	container: {
		backgroundColor: ColorCode.modalBackground,
	},
	title: {
		alignSelf: "center",
		color: ColorCode.appText,
		fontSize: 20,
		fontWeight: "500",
		margin: 15,
	},
	content: {
		marginHorizontal: 20,
		height: "100%",
	},
	group: {
		marginBottom: 25
	},
	groupBtn: {
		flexDirection: "row",
		justifyContent: "flex-end"
	},
	caption: {
		fontWeight: "600",
		fontSize: 17,
		color: ColorCode.appText,
	},
	input: {
		borderColor: ColorCode.borderColor
	},
	listItems: {
		borderColor: "gray",
		borderWidth: 3,
		borderStyle: "solid",
		marginTop: 15,
		borderRadius: 10,
		maxHeight: Dimensions.get("window").height * 0.5
	},
	itemName: {
		fontSize: 14,
		color: ColorCode.appText,
		fontSize: 17,
		marginRight: "auto",
		marginLeft: 20
	},
	itemDetails: {
		backgroundColor: "transparent",
		shadowColor: "#000",
		shadowOpacity: 0.1,
		shadowRadius: 10,
		shadowOffset: { width: 0, height: 0 },

		width: "100%",
		borderColor: ColorCode.borderColor,
		borderWidth: 2,
		borderStyle: "solid",
		borderRadius: 15,

		paddingHorizontal: 20,
		paddingVertical: 18,
		marginTop : 10,

		alignItems: "center",
		flexDirection: "row",
	},
	CbBorder:{
		borderColor: ColorCode.primaryBgButton,
	},
	button: {
		marginRight: 15,
		paddingHorizontal: 17,
		height : 50,
		borderWidth : 0,
	}
});

export default styles;
