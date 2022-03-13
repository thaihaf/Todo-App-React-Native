import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import IconStrings from "../../Contants/IconStrings";

import styles from "./style";

const TimeTable = ({ slot, navigation }) => {
  const handldeTouch = () => {
    navigation.navigate(NavigationStrings.ITEMS, { slot: slot });
  };

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={[styles.timer, { fontWeight: "bold" }]}>{slot.start}</Text>
        <Text style={styles.timer}>{slot.end}</Text>
      </View>

      <View style={styles.right}>
        <Text style={styles.courseName}>{slot.courseName}</Text>

        <Text style={styles.chapter}>{slot.chapter}</Text>

        <View style={styles.room}>
          {slot.room ? (
            <>
              <Ionicons
                style={{
                  width: 30,
                  marginRight: 11,
                  textAlign: "center",
                }}
                name={IconStrings.icLocation}
                size={20}
                color="gray"
              />
              <Text style={[styles.roomText, styles.roomOffline]}>
                {slot.room}
              </Text>
            </>
          ) : (
            <>
              <Ionicons
                style={{
                  width: 30,
                  marginRight: 11,
                  textAlign: "center",
                }}
                name="radio-button-on"
                size={18}
                color="green"
              />
              <Text style={[styles.roomText, styles.roomOnline]}>Meet URL</Text>
            </>
          )}
        </View>

        <View style={styles.intructor}>
          <Image style={styles.intructorAvt} source={slot.intructorAvt} />
          <Text style={styles.intructorName}>{slot.intructorName}</Text>
        </View>

        <View style={styles.actions}>
          <Ionicons
            style={[
              slot.attendance == IconStrings.icCheckmark &&
                styles.actionColorGreen,
              slot.attendance == IconStrings.icClose && styles.actionColorRed,
            ]}
            name={slot.attendance}
            size={22}
            color="gray"
          />
        </View>
      </View>
    </View>
  );
};

export default TimeTable;
