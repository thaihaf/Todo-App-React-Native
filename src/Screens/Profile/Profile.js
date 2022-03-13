import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Alert,
  Dimensions,
  Image,
  Switch,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button, Category, Header, TimeTable } from "../../Components";
import IconStrings from "../../Contants/IconStrings";
import ImagePath from "../../Contants/ImagePath";
import NavigationStrings from "../../Contants/NavigationStrings";

import styles from "./style";
import { Modal } from "react-native";
import { ScrollView } from "react-native";

const Profile = (props) => {
  const { navigation } = props;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.topActions}>
          <Ionicons
            style={[styles.topAction, styles.backButton]}
            name={IconStrings.icArrowBack2}
            size={29}
          />
          <Text style={styles.title}>Profile</Text>
          <Ionicons
            style={[styles.topAction, styles.logoutButton]}
            name="log-out-outline"
            size={29}
          />
        </View>

        <View style={[styles.info]}>
          <Image style={styles.avt} source={ImagePath.imgAvatar} />
          <Text style={styles.name}>Nguyen Thai Ha</Text>
        </View>

        <Button
          style={styles.primaryBtn}
          text="Edit Profile"
          textStyle={styles.primaryBtnText}
        />

        <View style={styles.tab}>
          <Ionicons
            style={{
              width: 30,
              marginRight: 11,
              textAlign: "center",
            }}
            name="chatbox-ellipses"
            size={25}
            color="gray"
          />

          <Text style={styles.courseName}>Contact</Text>
        </View>

        <View style={styles.tab}>
          <Ionicons
            style={{
              width: 30,
              marginRight: 11,
              textAlign: "center",
            }}
            name="settings"
            size={25}
            color="gray"
          />

          <Text style={styles.courseName}>Accounts Settings</Text>
        </View>

        <View style={styles.tab}>
          <Ionicons
            style={{
              width: 30,
              marginRight: 11,
              textAlign: "center",
            }}
            name="notifications"
            size={25}
            color="gray"
          />

          <Text style={styles.courseName}>Notifications</Text>

          <Switch value={true} />
        </View>

        <View style={styles.tab}>
          <Ionicons
            style={{
              width: 30,
              marginRight: 11,
              textAlign: "center",
            }}
            name="mail"
            size={25}
            color="gray"
          />

          <Text style={styles.courseName}>Email Remaining</Text>

          <Switch value={true} />
        </View>

        <View style={styles.tab}>
          <Ionicons
            style={{
              width: 30,
              marginRight: 11,
              textAlign: "center",
            }}
            name="information-circle"
            size={25}
            color="gray"
          />

          <Text style={styles.courseName}>About</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
