import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Alert,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button, Category, Header, TimeTable } from "../../Components";
import IconStrings from "../../Contants/IconStrings";
import ImagePath from "../../Contants/ImagePath";
import NavigationStrings from "../../Contants/NavigationStrings";

import styles from "./style";
import ColorCode from "../../Contants/ColorCode";
import { Modal } from "react-native";
import { ScrollView } from "react-native";

const TimeTables = (props) => {
  const { navigation } = props;
  const [timeTable] = useState([
    {
      id: 1,
      start: "7:30",
      end: "9:00",
      courseName: "biology",
      // room: "DE-C309",
      intructorAvt: ImagePath.imgAvatar,
      intructorName: "Thomas O'Hara",
      chapter: "Chapter 1 : Introduction",
      attendance: IconStrings.icCheckmark,
    },
    {
      id: 2,
      start: "9:10",
      end: "10:40",
      courseName: "mathematics",
      room: "DE-C309",
      intructorAvt: ImagePath.imgAvatar,
      intructorName: "Mrs. Valerie Graham",
      chapter: "Chapter 2 : Animal Kingdom",
      attendance: IconStrings.icClose,
    },
    {
      id: 3,
      start: "10:50",
      end: "12:20",
      courseName: "geography",
      // room: "DE-C309",
      intructorAvt: ImagePath.imgAvatar,
      intructorName: "Lynda Turcotte",
      chapter: "Chapter 3 : Economy USA",
      attendance: IconStrings.icCycle,
    },
    {
      id: 4,
      start: "12:50",
      end: "14:20",
      courseName: "literature",
      room: "DE-C309",
      intructorAvt: ImagePath.imgAvatar,
      intructorName: "Ruben Walter",
      chapter: "Chapter 1 : Introduction",
      attendance: IconStrings.icCycle,
    },
    {
      id: 5,
      start: "14:30",
      end: "16:00",
      courseName: "english",
      room: "DE-C309",
      intructorAvt: ImagePath.imgAvatar,
      intructorName: "Woodrow Wintheiser",
      chapter: "Chapter 2 : Animal Kingdom",
      attendance: IconStrings.icCycle,
    },
    {
      id: 6,
      start: "16:10",
      end: "17:40",
      courseName: "math",
      room: "DE-C309",
      intructorAvt: ImagePath.imgAvatar,
      intructorName: "Lynda Upton",
      chapter: "Chapter 3 : Economy USA",
      attendance: IconStrings.icCycle,
    },
  ]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Ionicons
            style={styles.backButton}
            name={IconStrings.icArrowBack2}
            size={24}
            color={ColorCode.appText}
          />

          <Text style={styles.headerTitle}>timetable</Text>

          <Button
            onPress={() => Alert.alert("Title", "Content")}
            style={styles.calendarButton}
            icon={IconStrings.icCalendar}
            iconPos="left"
            text="7 - 11 September"
            textStyle={styles.calendarButtonText}
          />

          <View style={styles.listDay}>
            <View style={[styles.day, styles.currentDay]}>
              <Text style={[styles.dayText, styles.currentDayText]}>Mon</Text>
              <Text style={[styles.dayText, styles.currentDayText]}>7</Text>
            </View>
            <View style={[styles.day]}>
              <Text style={[styles.dayText]}>Tue</Text>
              <Text style={[styles.dayText]}>8</Text>
            </View>
            <View style={[styles.day]}>
              <Text style={[styles.dayText]}>Web</Text>
              <Text style={[styles.dayText]}>9</Text>
            </View>
            <View style={[styles.day]}>
              <Text style={[styles.dayText]}>Thu</Text>
              <Text style={[styles.dayText]}>10</Text>
            </View>
            <View style={[styles.day]}>
              <Text style={[styles.dayText]}>Fri</Text>
              <Text style={[styles.dayText]}>11</Text>
            </View>
          </View>
        </View>

        <FlatList
          data={timeTable}
          renderItem={({ item }) => (
            <TimeTable slot={item} navigation={navigation} />
          )}
          keyExtractor={(item) => `${item.id}`}
          contentContainerStyle={{
            paddingRight: 12,
            marginTop: 10,
          }}
        />

        <Modal
          animation="fade"
          transparent={true}
          visible={false}
          onRequestClose={() => {}}
        >
          <View style={{ flex: 1, backgroundColor: "#000000AA" }}>
            <View
              style={{
                bottom: 0,
                position: "absolute",
                width: "100%",
                backgroundColor: "#fff",
                borderTopLeftRadius: 35,
                borderTopRightRadius: 35,
                height: Dimensions.get("window").height * 0.54,
                maxHeight: Dimensions.get("window").height * 0.54,
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  color: "#182E44",
                  fontSize: 20,
                  fontWeight: "500",
                  margin: 15,
                }}
              >
                Details
              </Text>

              <View style={styles.bottomTab}>
                <ScrollView>
                  <View style={styles.itemDetails}>
                    <Ionicons
                      name="git-commit-outline"
                      size={30}
                      color="white"
                    />
                    <View style={{ marginRight: "auto", marginLeft: 20 }}>
                      <Text style={styles.itemNameCap}>SE1432</Text>
                      <Text style={styles.itemName}>Class</Text>
                    </View>
                    <Ionicons
                      name="chatbubbles-outline"
                      size={30}
                      color="white"
                    />
                  </View>

                  <View style={styles.itemDetails}>
                    <Ionicons
                      name="git-commit-outline"
                      size={30}
                      color="white"
                    />
                    <View style={{ marginRight: "auto", marginLeft: 20 }}>
                      <Text style={styles.itemNameCap}>Mathematics</Text>
                      <Text style={styles.itemName}>Subject</Text>
                    </View>
                    <Ionicons
                      name="newspaper-outline"
                      size={30}
                      color="white"
                    />
                  </View>

                  <View style={styles.itemDetails}>
                    <Ionicons
                      name="git-commit-outline"
                      size={30}
                      color="white"
                    />
                    <View style={{ marginRight: "auto", marginLeft: 20 }}>
                      <Text style={styles.itemNameCap}>3/5</Text>
                      <Text style={styles.itemName}>Exercise</Text>
                    </View>
                    <Ionicons
                      name="arrow-redo-outline"
                      size={30}
                      color="white"
                    />
                  </View>

                  <View style={styles.itemDetails}>
                    <Ionicons
                      name="git-commit-outline"
                      size={30}
                      color="white"
                    />
                    <View style={{ marginRight: "auto", marginLeft: 20 }}>
                      <Text style={styles.itemNameCap}>Mrs. Valerie Graham</Text>
                      <Text style={styles.itemName}>Intructor</Text>
                    </View>
                    <Ionicons
                      name="chatbubble-ellipses-outline"
                      size={30}
                      color="white"
                    />
                  </View>
                </ScrollView>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default TimeTables;
