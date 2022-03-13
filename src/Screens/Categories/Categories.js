import React, { useContext, useEffect } from "react";
import { useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import styles from "./style";
import { Button, Category, Header, TextInput } from "../../Components";
import { useNavigation } from "@react-navigation/native";
import NavigationStrings from "../../Contants/NavigationStrings";
import { Ionicons } from "@expo/vector-icons";
import IconStrings from "../../Contants/IconStrings";
import ColorCode from "../../Contants/ColorCode";
import { useQuery } from "react-query";
import { getCollections, getCollection } from "../../Ultils/API/collectionsApi";
import Toast from "react-native-toast-message";
import SkeletonContent from "react-native-skeleton-content";
import UserContext from "../../Contexts/UserContext";
import { setHeader } from "../../Helpers/axios";

const CategoriesList = ({ navigation, route }) => {
  const userContext = useContext(UserContext);

  const [openSearchBar, setOpenSearchBar] = useState(false);

  console.log("aaa");
  const { isLoading, isError, data, error, refetch } = useQuery(
    "categories",
    async () => {
      console.log("user : " + userContext.user);
      await setHeader(userContext.user.token);

      const data = await getCollections("api/categories");
      return data;
    },
    { fetchPolicy: "network-only" }
  );

  if (isError && error) {
    Toast.show({
      type: "error",
      text1: `Code : ${error.response.data.code}`,
      text2: error.response.data.message,
      visibilityTime: 5000,
    });
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        title={NavigationStrings.HEADER_TEXT}
        buttonLeft={{
          icon: "subject",
          handlePress: () => navigation.openDrawer(),
        }}
      />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.container}>
          {openSearchBar ? (
            <View style={styles.searchBar}>
              <TextInput
                style={styles.searchInput}
                placeholder="Search"
                placeholderTextColor={ColorCode.appText}
              />
              <Button
                style={[styles.searchBtn, styles.closeSearchBtn]}
                onPress={() => setOpenSearchBar(false)}
                iconPos="left"
                icon="close"
              />
            </View>
          ) : (
            <Button
              style={styles.searchBtn}
              onPress={() => setOpenSearchBar(true)}
              iconPos="left"
              icon={IconStrings.icSearch}
            />
          )}

          <SkeletonContent
            containerStyle={{ flex: 1, width: "100%", paddingHorizontal: 20 }}
            isLoading={isLoading}
            layout={[
              { key: "someId1", width: "100%", height: 100, marginBottom: 6 },
              { key: "someOtherId1", width: 180, height: 20, marginBottom: 6 },
              { key: "someId2", width: "100%", height: 100, marginBottom: 6 },
              { key: "someOtherId2", width: 180, height: 20, marginBottom: 6 },
              { key: "someId3", width: "100%", height: 100, marginBottom: 6 },
              { key: "someOtherId3", width: 180, height: 20, marginBottom: 6 },
            ]}
          ></SkeletonContent>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CategoriesList;
