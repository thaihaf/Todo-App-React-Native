import { StyleSheet } from "react-native";
import ColorCode from "../../Contants/ColorCode";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 15,

    backgroundColor: "transparent",
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
  },
  left: {
    width: "20%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 18,
  },
  timer: {
    color: ColorCode.appBackgound,
  },
  right: {
    width: "80%",
    alignItems: "flex-start",
    justifyContent: "center",
    borderRadius: 13,
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: "#F6F6F5",
    position: "relative",
  },
  courseName: {
    textTransform: "capitalize",
    fontSize: 19,
    fontWeight: "bold",
  },
  chapter:{
    fontSize: 15,
    fontWeight: "bold",
  },
  room: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  roomOnline: {
    color: "green",
  },
  intructor: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  intructorAvt: {
    width: 30,
    height: 30,
  },
  intructorName: {
    marginLeft: 10,
    color: ColorCode.appBackgound,
  },
  actions: {
    position: "absolute",
    right: 0,
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
  actionColorGreen: {
    color: "green",
  },
  actionColorRed: {
    color: "red",
  },
  actionColorGreen: {
    color: "green",
  },

  
});
export default styles;
