import { StyleSheet } from "react-native";
import ColorCode from "../../Contants/ColorCode";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    paddingHorizontal: 31,
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

  //
  // bottomTab: {
  //   marginHorizontal: 20,
  //   height: "100%",
  // },
  // itemDetails: {
  //   width: "100%",
  //   backgroundColor: "#4DC591",
  //   borderRadius: 15,

  //   marginTop: 15,
  //   paddingHorizontal: 20,
  //   paddingVertical: 10,

  //   alignItems: "center",
  // },
  // itemNameCap: {
  //   fontWeight: "600",
  //   fontSize: 19,
  //   marginBottom: 5,
  // },
  // itemName: {
  //   fontSize: 14,
  // },
  // buttons: {
  //   width: "100%",
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  // },
  // button: {
  //   borderWidth: 0,
  //   height: 40,
  //   paddingHorizontal: 7,
  //   borderRadius: 15,
  // },
  // primaryBtnText: {
  //   fontSize: 13,
  // },

  // //
  // container: {
  //   paddingHorizontal: 20,
  //   backgroundColor : "#FAFAF5",
  //   flex : 1
  // },
});

export default styles;
