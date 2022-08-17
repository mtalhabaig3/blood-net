import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import * as Font from "expo-font";
import { LineChart, Path } from "react-native-svg-charts";
import { Line } from "react-native-svg";
import * as shape from "d3-shape";
import { MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";
import { Block, Text } from "../components";
import * as theme from "../theme";
import * as mocks from "../core/mocks";

const Home = ({ chart, user, allRequests, navigation, allAvailables }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const isFocused = useIsFocused();

  function loadFonts() {
    return Font.loadAsync({
      "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
      "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
      "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
      "Montserrat-Medium": require("../assets/fonts/Montserrat-Medium.ttf"),
      "Montserrat-Light": require("../assets/fonts/Montserrat-Light.ttf"),
    });
  }
  async function LoadingFonts() {
    await loadFonts();
    setFontsLoaded(true);
  }
  useEffect(() => {
    LoadingFonts();
    // mocks.allRequests.splice(8);
  }, [isFocused]);

  function renderChart() {
    const LineShadow = ({ line }) => (
      <Path
        d={line}
        fill="none"
        stroke={theme.colors.primary}
        strokeWidth={7}
        strokeOpacity={0.07}
      />
    );

    return (
      <LineChart
        yMin={0}
        yMax={10}
        data={chart}
        style={{ flex: 2 }}
        curve={shape.curveMonotoneX}
        svg={{
          stroke: theme.colors.primary,
          strokeWidth: 1.25,
        }}
        contentInset={{ left: theme.sizes.base, right: theme.sizes.base }}
      >
        <LineShadow belowChart={true} />
        <Line
          key="zero-axis"
          x1="0%"
          x2="100%"
          y1="50%"
          y2="50%"
          belowChart={true}
          stroke={theme.colors.gray}
          strokeDasharray={[2, 10]}
          strokeWidth={1}
        />
      </LineChart>
    );
  }

  function renderHeader() {
    return (
      <Block flex={0.35} column style={{ paddingHorizontal: 15 }}>
        <Block flex={false} row style={{ paddingVertical: 15 }}>
          <Block center>
            <Text h3 white style={{ marginRight: -(25 + 5) }}>
              Blood Net
            </Text>
          </Block>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Image style={styles.avatar} source={user.avatar} />
          </TouchableOpacity>
        </Block>
        <Block card shadow color="white" style={styles.headerChart}>
          <Block row space="between" style={{ paddingHorizontal: 30 }}>
            <Block flex={false} row center>
              <Text h1>{mocks.allAvailables.length}</Text>
              <Text caption bold tertiary style={{ paddingHorizontal: 10 }}>
                -5%
              </Text>
            </Block>
            <Block flex={false} row center>
              <Text caption bold primary style={{ paddingHorizontal: 10 }}>
                +11%
              </Text>
              <Text h1>{mocks.allRequests.length}</Text>
            </Block>
          </Block>
          <Block
            flex={0.5}
            row
            space="between"
            style={{ paddingHorizontal: 30 }}
          >
            <Text caption light>
              Available
            </Text>
            <Text caption light>
              Requests
            </Text>
          </Block>
          <Block flex={1}>{renderChart()}</Block>
        </Block>
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

  function renderAvailable(available) {
    return (
      <Block row card shadow color="white" style={styles.request}>
        <Block
          flex={0.15}
          card
          column
          color="secondary"
          style={styles.requestStatus}
        >
          <Block middle center>
            <Text h2 white>
              {available.bloodType}
            </Text>
          </Block>
        </Block>
        <Block flex={0.75} column middle>
          <Text h3 style={{ paddingVertical: 3, fontSize: 15 }}>
            {available.name}
          </Text>
          <Text caption semibold style={{ paddingVertical: 1, fontSize: 12 }}>
            {available.age} , {available.gender} , {available.distance}km
          </Text>
        </Block>
      </Block>
    );
  }
  function renderRequests() {
    return (
      <Block flex={0.33} column color="gray2" style={styles.requests}>
        <Block flex={false} row space="between" style={styles.requestsHeader}>
          <Text light>Recent Requests</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Requests")}
          >
            <Text semibold>View All</Text>
          </TouchableOpacity>
        </Block>
        <ScrollView showsVerticalScrollIndicator={false}>
          {allRequests.slice(0, 4).map((request) => (
            <TouchableOpacity
              activeOpacity={0.8}
              key={`request-${request.id}`}
              onPress={() => navigation.navigate("Request", { request })}
            >
              {renderRequest(request)}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Block>
    );
  }

  function renderAvaiables() {
    return (
      <Block flex={0.28} column color="gray2" style={styles.requests2}>
        <Block flex={false} row space="between" style={styles.requestsHeader}>
          <Text light>Recent Donors</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Availables")}
          >
            <Text semibold>View All</Text>
          </TouchableOpacity>
        </Block>
        <ScrollView showsVerticalScrollIndicator={false}>
          {allAvailables.slice(0, 3).map((donation) => (
            <TouchableOpacity
              activeOpacity={0.8}
              key={`donation-${donation.id}`}
              onPress={() =>
                navigation.navigate("Available", { available: donation })
              }
            >
              {renderAvailable(donation)}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Block>
    );
  }

  if (!fontsLoaded) {
    return (
      <Block center middle>
        <Image
          style={{ width: 140, height: 140 }}
          source={require("../assets/icon.png")}
        />
      </Block>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      {renderHeader()}
      {renderRequests()}
      {renderAvaiables()}

      <TouchableOpacity
        onPress={() => navigation.navigate("Option")}
        style={{
          position: "absolute",
          left: 30,
          top: 50,
          borderRadius: 50 / 2,
          width: 50,
          height: 50,
          backgroundColor: theme.colors.white,
          shadowColor: "black",
          shadowOpacity: 5,
          shadowRadius: 5,
          shadowOffset: {
            height: 3,
            width: 3,
          },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Fontisto
          name="blood-drop"
          color={theme.colors.primary}
          size={theme.sizes.font * 2.8}
        />
        {/* <Text style={{ color: "black" }}>Interact</Text> */}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

Home.defaultProps = {
  user: mocks.user,
  allRequests: mocks.allRequests,
  allAvailables: mocks.allAvailables,
  chart: mocks.chart,
};

export default Home;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  headerChart: {
    paddingTop: 30,
    paddingBottom: 30,
    zIndex: 1,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    marginRight: 5,
  },
  requests: {
    marginTop: -55,
    paddingTop: 55 + 20,
    paddingHorizontal: 15,
    zIndex: -1,
  },
  requests2: {
    paddingHorizontal: 15,
    paddingTop: 20,
    marginTop: -30,
    paddingBottom: 15,
  },
  requestsHeader: {
    paddingHorizontal: 20,
    paddingBottom: 15,
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
