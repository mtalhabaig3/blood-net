import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import BackButton from "../components/BackButton";
import * as Font from "expo-font";
import * as mocks from "../core/mocks";
import { Block, Text } from "../components";
import * as theme from "../theme";

const Available = ({ navigation, route }) => {
  return (
    <SafeAreaView>
      <Text>Salam</Text>
      <BackButton goBack={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

export default Available;
