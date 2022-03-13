import React from "react";
import { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

import styles from "./style";
import { Category, Header } from "../../Components";
import { useNavigation } from "@react-navigation/native";
import NavigationStrings from "../../Contants/NavigationStrings";

const Tasks = () => {
  const navigation = useNavigation();

  const [categories, setCategories] = useState([
    { id: 1, title: "Lamborghini A4" },
    { id: 2, title: "Kia Escalade" },
    { id: 3, title: "BMW Model 3" },
    { id: 4, title: "Rolls Royce Aventador" },
    { id: 5, title: "Bentley Mercielago" },
    { id: 6, title: "Rolls Royce A8" },
    { id: 7, title: "BMW Beetle" },
    { id: 8, title: "Audi Silverado" },
    { id: 9, title: "Jeep Colorado" },
  ]);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header
          title={NavigationStrings.HEADER_TEXT}
          buttonLeft={{
            icon: "subject",
            name: "",
            handlePress: () => navigation.openDrawer(),
          }}
        />

        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <Category category={item} navigation={navigation} />
          )}
          keyExtractor={(item) => `${item.id}`}
          contentContainerStyle={{
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10,
          }}
        />
      </SafeAreaView>
    </View>
  );
};

export default Tasks;
