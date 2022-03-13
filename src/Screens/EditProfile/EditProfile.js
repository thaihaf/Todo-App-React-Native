import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Header } from "../../Components";
import NavigationStrings from "../../Contants/NavigationStrings";

import styles from "./style";

const EditProfile = (props) => {
  const { navigation } = props;
  return (
    <SafeAreaView>
      <Header
        title={NavigationStrings.HEADER_TEXT}
        buttonLeft={{
          icon: "subject",
          handlePress: () => navigation.openDrawer(),
        }}
      />
      
      <View style={styles.container}>
        <Text>EditProfile</Text>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;
