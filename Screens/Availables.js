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

const Availables = ({ navigation, allAvailables }) => {
  function renderRequests() {
    return (
      <Block flex={1} column color="gray2" style={styles.requests}>
        <Block flex={false} row space="between" style={styles.requestsHeader}>
          <Text h1>Donors</Text>
          <TouchableOpacity activeOpacity={0.8}></TouchableOpacity>
        </Block>
        <ScrollView showsVerticalScrollIndicator={false}>
          {allAvailables.map((available) => (
            <TouchableOpacity
              activeOpacity={0.8}
              key={`request-${available.id}`}
            >
              {renderRequest(available)}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Block>
    );
  }
  function renderRequest(request) {
    return (
      <Block row card shadow color="white" style={styles.request}>
        <Block
          flex={0.15}
          card
          column
          color="secondary"
          style={styles.requestStatus}
        >
          <Block flex={0.25} middle center color={theme.colors.primary}>
            <Text small white style={{ textTransform: "uppercase" }}>
              {request.priority}
            </Text>
          </Block>
          <Block flex={0.7} middle center>
            <Text h2 white>
              {request.bloodType}
            </Text>
          </Block>
        </Block>
        <Block flex={0.75} column middle>
          <Text h3 style={{ paddingVertical: 3, fontSize: 15 }}>
            {request.name}
          </Text>
          <Text caption semibold style={{ paddingVertical: 1, fontSize: 12 }}>
            {request.age} , {request.gender} , {request.distance}km
          </Text>
        </Block>
      </Block>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      {renderRequests()}
      <BackButton goBack={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

Availables.defaultProps = {
  allAvailables: mocks.allAvailables,
};
export default Availables;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    // backgroundColor: theme.colors.primary,
  },
  headerChart: {
    paddingTop: 30,
    paddingBottom: 30,
    zIndex: 1,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginRight: 5,
  },
  requests: {
    paddingHorizontal: 15,
  },
  requests2: {
    paddingHorizontal: 15,
    marginTop: -30,
  },
  requestsHeader: {
    paddingHorizontal: 20,
    paddingBottom: 15,
    justifyContent: "center",
  },
  request: {
    padding: 10,
    marginBottom: 10,
  },
  requestStatus: {
    marginRight: 20,
    overflow: "hidden",
    height: 50,
  },
});
