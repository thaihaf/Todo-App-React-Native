import { StyleSheet } from "react-native";
import ColorCode from "../../Contants/ColorCode";

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    marginBottom: 70,
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
  },
  primaryBtnText: {
    textTransform: "uppercase",
  },
  seperator: {
    alignSelf: "center",
    color: ColorCode.appText,
    marginTop: 30,
    marginBottom : 10
  },
  btnGoogle: {
    backgroundColor: "transparent",
    marginBottom: 30,
  },
  registerLink: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
  },
  registerText: {
    color: ColorCode.appText,
  },
  registerBtnText: {
    color: "green",
  },
});

export default styles;
