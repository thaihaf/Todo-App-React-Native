import React, { Component } from "react";
import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native";

import styles from "./style";

const Item = ({ navigation, route }) => {
  const { category } = route.params;

  const goBack = () => {
    navigation.goBack();
  };
  const goToTop = () => {
    navigation.goToTop();
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text>{category.title}</Text>
        <Button onPress={goBack} title="Go to Back" />
      </SafeAreaView>
    </View>
  );
};

export default Item;
