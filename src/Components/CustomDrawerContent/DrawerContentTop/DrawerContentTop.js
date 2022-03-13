import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import IconStrings from "../../../Contants/IconStrings";

import ImagePath from "../../../Contants/ImagePath";
import NavigationStrings from "../../../Contants/NavigationStrings";

import styles from "./style";

const DrawerContentTop = ({ navigation }) => {
  const handldeClose = (e) => {
    navigation.closeDrawer();
  };
  const handldeSetting = (e) => {
    navigation.navigate(NavigationStrings.PROFILE_TABS);
  };

  return (
    <View style={styles.container}>
      <View style={styles.actionsButton}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={handldeClose}
          style={styles.closeButton}
        >
          <MaterialIcons
            name={IconStrings.icArrowBack}
            size={28}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={handldeSetting}
          style={styles.settingButton}
        >
          <MaterialIcons
            name={IconStrings.icSettings}
            size={25}
            color="white"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.userInfo}>
        <Image source={ImagePath.imgAvatar} style={styles.userImage} />
        <Text style={styles.userName}>User name</Text>
      </View>
    </View>
  );
};

export default DrawerContentTop;
