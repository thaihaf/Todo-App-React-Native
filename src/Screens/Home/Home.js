//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Modal,
  Dimensions,
  ScrollView,
} from "react-native";

import ImagePath from "../../Contants/ImagePath";
import NavigationStrings from "../../Contants/NavigationStrings";

import { Button, Header } from "../../Components";

import styles from "./style";
import { Ionicons } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  return (
    <>
      <StatusBar backgroundColor="violet" barStyle="light-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <Header
          title={NavigationStrings.HEADER_TEXT}
          buttonLeft={{
            icon: "subject",
            handlePress: () => navigation.openDrawer(),
          }}
        />
        <View style={styles.container}>
          <Text style={styles.caption}>
            Keep track of the daily tasks in life and get that satisfaction upon
            copletion.
          </Text>
          <View style={styles.buttons}>
            <Button
              style={[styles.button, styles.buttonLeft]}
              onPress={() =>
                navigation.navigate(NavigationStrings.CATEGORIES_STACK)
              }
              text="Get Start"
              textStyle={styles.primaryBtnText}
            />
            <Button
              style={[styles.button, styles.buttonRight]}
              text="Learn More"
              textStyle={styles.primaryBtnText}
            />
          </View>

          {
            // <Modal
            //   animation="fade"
            //   transparent={true}
            //   visible={false}
            //   onRequestClose={() => {}}
            // >
            //   <View style={{ flex: 1, backgroundColor: "#000000AA" }}>
            //     <View
            //       style={{
            //         bottom: 0,
            //         position: "absolute",
            //         width: "100%",
            //         backgroundColor: "#fff",
            //         borderTopLeftRadius: 35,
            //         borderTopRightRadius: 35,
            //         height: Dimensions.get("window").height * 0.9,
            //         maxHeight: Dimensions.get("window").height * 0.9,
            //       }}
            //     >
            //       <Text
            //         style={{
            //           alignSelf: "center",
            //           color: "#182E44",
            //           fontSize: 20,
            //           fontWeight: "500",
            //           margin: 15,
            //         }}
            //       >
            //         Notifications
            //       </Text>
            //       <View style={styles.bottomTab}>
            //         <ScrollView>
            //           <View style={styles.itemDetails}>
            //             <View>
            //               <Text style={styles.itemNameCap}>Congratulations!</Text>
            //               <Text style={styles.itemName}>
            //                 You have completed assignment 1 in HCI101 class with 8
            //                 points
            //               </Text>
            //             </View>
            //             <View style={styles.buttons}>
            //               <Button
            //                 style={[styles.button, styles.open]}
            //                 text="View assignment"
            //                 textStyle={styles.primaryBtnText}
            //               />
            //               <Button
            //                 style={[styles.button, styles.close]}
            //                 text="Close"
            //                 textStyle={styles.primaryBtnText}
            //               />
            //             </View>
            //           </View>
            //           <View style={styles.itemDetails}>
            //             <View>
            //               <Text style={styles.itemNameCap}>Hurry up!</Text>
            //               <Text style={styles.itemName}>
            //                 It's time for the fluter class, learn about firebase
            //               </Text>
            //             </View>
            //             <View style={styles.buttons}>
            //               <Button
            //                 style={[styles.button, styles.open]}
            //                 text="Get into class"
            //                 textStyle={styles.primaryBtnText}
            //               />
            //               <Button
            //                 style={[styles.button, styles.close]}
            //                 text="Close"
            //                 textStyle={styles.primaryBtnText}
            //               />
            //             </View>
            //           </View>
            //         </ScrollView>
            //       </View>
            //     </View>
            //   </View>
            // </Modal>
            // <View
            //   style={{
            //     flexDirection: "row",
            //     alignItems: "center",
            //     justifyContent: "space-between",
            //     marginTop: 20,
            //     marginBottom: 10,
            //   }}
            // >
            //   <View>
            //     <Text style={{ fontSize: 30, fontWeight: "bold" }}>Hi Hà,</Text>
            //     <Text style={{ fontSize: 14, fontWeight: "bold" }}>
            //       Wellcome back!!
            //     </Text>
            //   </View>
            //   <View style={{ flexDirection: "row", alignItems: "center" }}>
            //     <Ionicons
            //       style={{
            //         marginRight: 4,
            //         textAlign: "center",
            //       }}
            //       name="calendar"
            //       size={20}
            //     />
            //     <Text style={{ fontSize: 15 }}>Spring 2022</Text>
            //     <Ionicons
            //       style={{
            //         marginLeft: 6,
            //         textAlign: "center",
            //       }}
            //       name="chevron-down"
            //       size={24}
            //     />
            //   </View>
            // </View>
            // <View
            //   style={{
            //     flexDirection: "row",
            //     justifyContent: "space-between",
            //     marginTop: 10,
            //   }}
            // >
            //   <View
            //     style={{
            //       backgroundColor: "#548AD8",
            //       borderRadius: 15,
            //       paddingVertical: 25,
            //       paddingHorizontal: 30,
            //       width: 180,
            //       alignItems: "center",
            //       justifyContent: "center",
            //       shadowColor: "#171717",
            //       shadowOffset: { width: -2, peak: 4 },
            //       shadowOpacity: 0.2,
            //       shadowRadius: 3,
            //     }}
            //   >
            //     <Text
            //       style={{
            //         fontSize: 18,
            //         color: "white",
            //       }}
            //     >
            //       Attendance
            //     </Text>
            //     <Text
            //       style={{
            //         fontSize: 35,
            //         fontWeight: "bold",
            //         marginTop: 10,
            //         color: "white",
            //       }}
            //     >
            //       95%
            //     </Text>
            //   </View>
            //   <View
            //     style={{
            //       backgroundColor: "#F56050",
            //       borderRadius: 15,
            //       paddingVertical: 25,
            //       paddingHorizontal: 30,
            //       width: 180,
            //       alignItems: "center",
            //       justifyContent: "center",
            //       shadowColor: "#171717",
            //       shadowOffset: { width: -2, peak: 4 },
            //       shadowOpacity: 0.2,
            //       shadowRadius: 3,
            //     }}
            //   >
            //     <Text
            //       style={{
            //         fontSize: 35,
            //         fontWeight: "bold",
            //         marginTop: 10,
            //         color: "white",
            //       }}
            //     >
            //       5
            //     </Text>
            //     <Text
            //       style={{
            //         fontSize: 18,
            //         color: "white",
            //         textAlign: "center",
            //       }}
            //     >
            //       Subject in Progress
            //     </Text>
            //   </View>
            // </View>
            // <View
            //   style={{
            //     flexDirection: "row",
            //     justifyContent: "space-between",
            //     marginTop: 10,
            //   }}
            // >
            //   <View
            //     style={{
            //       backgroundColor: "#B5368C",
            //       borderRadius: 15,
            //       paddingVertical: 25,
            //       paddingHorizontal: 30,
            //       width: 180,
            //       alignItems: "center",
            //       justifyContent: "center",
            //       shadowColor: "#171717",
            //       shadowOffset: { width: -2, peak: 4 },
            //       shadowOpacity: 0.2,
            //       shadowRadius: 3,
            //     }}
            //   >
            //     <Text
            //       style={{
            //         fontSize: 35,
            //         fontWeight: "bold",
            //         marginTop: 10,
            //         color: "white",
            //       }}
            //     >
            //       3/4
            //     </Text>
            //     <Text
            //       style={{
            //         fontSize: 18,
            //         color: "white",
            //         textAlign: "center",
            //       }}
            //     >
            //       Lessions completed today
            //     </Text>
            //   </View>
            //   <View
            //     style={{
            //       backgroundColor: "#D0AA78",
            //       borderRadius: 15,
            //       paddingVertical: 25,
            //       paddingHorizontal: 30,
            //       width: 180,
            //       alignItems: "center",
            //       justifyContent: "center",
            //       shadowColor: "#171717",
            //       shadowOffset: { width: -2, peak: 4 },
            //       shadowOpacity: 0.2,
            //       shadowRadius: 3,
            //     }}
            //   >
            //     <Text
            //       style={{
            //         fontSize: 18,
            //         color: "white",
            //         textAlign: "center",
            //       }}
            //     >
            //       Quiz completed today
            //     </Text>
            //     <Text
            //       style={{
            //         fontSize: 35,
            //         fontWeight: "bold",
            //         marginTop: 10,
            //         color: "white",
            //       }}
            //     >
            //       0/4
            //     </Text>
            //   </View>
            // </View>
            // <View
            //   style={{
            //     backgroundColor: "#fff",
            //     flexDirection: "row",
            //     alignItems: "center",
            //     justifyContent: "space-between",
            //     marginTop: 20,
            //     padding: 20,
            //     borderRadius: 15,
            //     shadowColor: "#171717",
            //     shadowOffset: { width: -2, peak: 4 },
            //     shadowOpacity: 0.2,
            //     shadowRadius: 3,
            //   }}
            // >
            //   <View style={{}}>
            //     <Text
            //       style={{ fontWeight: "bold", color: "#41214C", fontSize: 23 }}
            //     >
            //       Exam schedule
            //     </Text>
            //     <Text style={{  marginTop: 10 }}>
            //       2 Subjects already available
            //     </Text>
            //   </View>
            //   <Ionicons
            //     style={{
            //       marginRight: 4,
            //       textAlign: "center",
            //     }}
            //     name="arrow-forward"
            //     size={30}
            //   />
            // </View>
          }
        </View>
      </SafeAreaView>
    </>
  );
};

export default Home;
