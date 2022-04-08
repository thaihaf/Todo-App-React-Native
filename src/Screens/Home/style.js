import { StyleSheet } from "react-native";
import ColorCode from "../../Contants/ColorCode";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
		paddingHorizontal : 30
  },
  caption: {
    fontSize: 16,
    color: "#a2c3d9",
    textAlign: "center",
  },
  buttons: {
    marginTop: 30,
    flexDirection: "row",
  },
  button: {
		maxWidth : "50%",
    paddingHorizontal: 20,
    borderRadius: 15,
    marginHorizontal: 8,
    borderBottomWidth: 5,
    borderStyle: "solid",
  },
  buttonLeft: {
    backgroundColor: "#FB71A5",
    borderColor: "#FB71A5",
    borderBottomColor: "#a74391",
  },
  buttonRight: {
    backgroundColor: "#2E2E3B",
    borderColor: "#2E2E3B",
    borderBottomColor: "#23232c",
  },
  buttonText: {
    fontWeight: "800",
    color: "white",
    fontSize: 16,
  },
});

export default styles;
