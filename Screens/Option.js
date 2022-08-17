import React, { Component } from "react";
import { View, TouchableOpacity, SafeAreaView } from "react-native";
import { MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";
import { Block, Text } from "../components";
import * as theme from "../theme";
import BackButton from "../components/BackButton";

const Option = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <Block center> */}
      <Text h3 black style={{ marginTop: 150 }}>
        What would you like to do?
      </Text>
      {/* </Block> */}
      <TouchableOpacity
        onPress={() => navigation.navigate("ApplyDonation")}
        style={{
          position: "absolute",
          left: 70,
          top: 300,
          borderRadius: 100 / 2,
          width: 100,
          height: 100,
          backgroundColor: theme.colors.white,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MaterialCommunityIcons
          name="blood-bag"
          color={theme.colors.primary}
          size={theme.sizes.font * 4}
        />
        <Text h3 black light>
          Donate
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("ApplyRequest")}
        style={{
          position: "absolute",
          right: 70,
          top: 300,
          borderRadius: 100 / 2,
          width: 100,
          height: 100,
          backgroundColor: theme.colors.white,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Fontisto
          name="blood"
          color={theme.colors.primary}
          size={theme.sizes.font * 4}
        />
        <Text h3 black light>
          Request
        </Text>
      </TouchableOpacity>

      <BackButton goBack={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

export default Option;
