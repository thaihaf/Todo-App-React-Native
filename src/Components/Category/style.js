import { StyleSheet } from "react-native";
import ColorCode from "../../Contants/ColorCode";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",

		minWidth: "100%",
		marginBottom: 10,
		paddingVertical: 25,
		paddingHorizontal: 30,

		borderRadius: 25,
		backgroundColor: "#272732",

		shadowColor: "#000",
		shadowOpacity: 0.3,
		shadowRadius: 10,
		shadowOffset: { width: 0, height: 0 },
	},
	title: {
		textTransform: "capitalize",
		fontSize: 19,
		fontWeight: "700",
		color: ColorCode.appText,
	},

});

export default styles;
