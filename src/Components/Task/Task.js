import React from "react";
import {
  Alert,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ImagePath from "../../contants/ImagePath";

import NavigationStrings from "../../contants/NavigationStrings";

import styles from "./style";

const Task = ({ task, navigation }) => {
  const handldeTouch = () => {
    navigation.navigate(NavigationStrings.ITEMS, { task: task });
  };

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={handldeTouch}>
      <View style={styles.container}>
        <Text style={styles.title}>{task.title}</Text>
        <Image source={ImagePath.imgItem} style={styles.taskImage} />
      </View>
    </TouchableOpacity>
  );
};

export default Task;
