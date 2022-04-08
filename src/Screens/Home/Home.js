import React from "react";
import {
  View,
  Text,
  SafeAreaView,
} from "react-native";

import NavigationStrings from "../../Contants/NavigationStrings";

import { CustomButton, Header } from "../../Components";

import styles from "./style";

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
          <CustomButton
            style={[styles.button, styles.buttonLeft]}
            onPress={() =>
              navigation.navigate(NavigationStrings.CATEGORIES)
            }
            text="Get Start"
            textStyle={styles.primaryBtnText}
          />
          <CustomButton
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
