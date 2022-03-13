import React from "react";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";

import { MaterialIcons } from "@expo/vector-icons";

import NavigationStrings from "../../Contants/NavigationStrings";
import IconStrings from "../../Contants/IconStrings";

import DrawerContentTop from "./DrawerContentTop/DrawerContentTop";

import styles from "./style";

export default CustomDrawerContent = (props) => {
  const { navigation } = props;
  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <DrawerContentTop {...props} />

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
