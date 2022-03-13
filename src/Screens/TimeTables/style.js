import { StyleSheet } from "react-native";
import ColorCode from "../../Contants/ColorCode";

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  header: {
    borderBottomStartRadius: 35,
    borderBottomEndRadius: 35,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginHorizontal: 2,
    backgroundColor: "#41214C",
  },
  backButton: {
    // backgroundColor: "#FDFAAE",
    // width: 40,
    // height: 40,
    // borderRadius: 10,
    // alignItems: "center",
    // justifyContent: "center",
  },
  headerTitle: {
    fontSize: 40,
    textTransform: "capitalize",
    color: ColorCode.appText,
    fontWeight: "100",
    marginTop: 20,
  },
  calendarButton: {
    backgroundColor: "transparent",
    borderWidth: 0,
    justifyContent: "flex-start",
    marginTop: 0,
  },
  calendarButtonText: {
    marginLeft: 10,
  },
  listDay: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  day: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: 60,
    height: 55,
    borderRadius: 20,
    backgroundColor: "transparent",

    borderWidth: 1.5,
    borderStyle: "solid",
    borderColor: ColorCode.appText,
  },
  currentDay: {
    backgroundColor: "#FE8DE4",
    borderColor: "#FE8DE4",
    fontWeight: "bold",
  },
  dayText: {
    color: ColorCode.appText,
  },
  currentDayText: {
    fontWeight: "bold",
  },

  //
  bottomTab: {
    marginHorizontal: 20,
    height: "100%",
  },
  itemDetails: {
    backgroundColor: "transparent",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },

    width: "100%",
    backgroundColor: "#4DC591",
    borderRadius: 15,

    marginTop: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,

    alignItems: "center",
    flexDirection: "row",
  },
  itemNameCap: {
    fontWeight: "600",
    fontSize: 19,
    marginBottom: 5,
    color: ColorCode.appText,
  },
  itemName: {
    fontSize: 14,
    color: "gray",
  },
});

export default styles;
