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
                navigation.navigate(NavigationStrings.CATEGORIES)
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
        </View>
      </SafeAreaView>
  );
};

export default Home;
