import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import BackButton from "../components/BackButton";
import * as Font from "expo-font";
import * as mocks from "../core/mocks";
import * as theme from "../theme";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";
import {
  MaterialCommunityIcons,
  Ionicons,
  Fontisto,
  MaterialIcons,
} from "@expo/vector-icons";

const Available = ({ navigation, route }) => {
  const available = route.params.available;
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={[styles.userInfoSection, { justifyContent: "center" }]}>
          <View
            style={{
              marginTop: 15,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {available.gender === "Male" ? (
              <Image
                style={styles.image}
                source={require("../assets/male_avatar.png")}
              />
            ) : (
              <Image
                style={styles.image}
                source={require("../assets/female_avatar.png")}
              />
            )}

            <View style={{ marginLeft: 20 }}>
              <Title
                style={[
                  styles.title,
                  {
                    marginTop: 15,
                    marginBottom: 5,
                  },
                ]}
              >
                {available.name}
              </Title>
            </View>
          </View>
        </View>
        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <MaterialCommunityIcons
              name="map-marker-radius"
              color="#f72b2b"
              size={20}
            />
            <Text style={{ color: "#777777", marginLeft: 20, fontSize: 16 }}>
              {available.location}
            </Text>
          </View>
          <View style={styles.row}>
            <MaterialCommunityIcons name="phone" color="#f72b2b" size={20} />
            <Text style={{ color: "#777777", marginLeft: 20, fontSize: 16 }}>
              {available.contact}
            </Text>
          </View>
          <View style={styles.row}>
            <MaterialCommunityIcons
              name="map-marker-distance"
              color="#f72b2b"
              size={20}
            />
            <Text style={{ color: "#777777", marginLeft: 20, fontSize: 16 }}>
              {available.time} km
            </Text>
          </View>
          <View style={styles.row}>
            <MaterialCommunityIcons
              name="calendar-account"
              color="#f72b2b"
              size={20}
            />
            <Text style={{ color: "#777777", marginLeft: 20, fontSize: 16 }}>
              {available.age} years
            </Text>
          </View>
          <View style={styles.row}>
            <Ionicons name="time-outline" color="#f72b2b" size={20} />
            <Text style={{ color: "#777777", marginLeft: 20, fontSize: 16 }}>
              {available.distance} hrs
            </Text>
          </View>

          <View style={styles.row}>
            <Fontisto name="blood-test" color="#f72b2b" size={20} />
            <Text style={{ color: "#777777", marginLeft: 28, fontSize: 16 }}>
              {available.bloodType}
            </Text>
          </View>
        </View>
        <TouchableRipple
          style={styles.btn}
          onPress={() => console.log("ready to request!")}
        >
          <Text style={styles.btnTxt}>Request!</Text>
        </TouchableRipple>
      </SafeAreaView>
      <BackButton goBack={() => navigation.goBack()} />
    </>
  );
};

export default Available;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  btn: {
    height: 50,
    width: 270,
    backgroundColor: "#f72b2b",
    borderRadius: 80,
    marginLeft: 65,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 320,
  },
  btnTxt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
  image: { width: 100, height: 100, borderRadius: 50 },
});
