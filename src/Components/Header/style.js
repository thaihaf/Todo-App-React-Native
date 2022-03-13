import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: 56,
    justifyContent: "center",
    paddingHorizontal: 10,
    // backgroundColor: "#007BFC",
  },
  buttonLeft: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    left: 15,
  },
  buttonLeftImage: {},
  title: {
    alignSelf: "center",
    fontWeight: "800",
    fontSize: 22,
    color: "#ffffff",
  },
  buttonRight: {
    flexDirection: "row",
    alignItems: "center",
    // position: "absolute",
    right: 15,
  },

  //
  // container: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   paddingHorizontal: 20,
  //   paddingTop : 10,
  //   backgroundColor : "#FAFAF5",
  // },
  // buttonLeft: {
  //   marginRight: "auto",
  // },
  // imgAvatar: {
  //   width: 45,
  //   height: 45,
  //   borderRadius: 50,
  // },
  
});

export default styles;
