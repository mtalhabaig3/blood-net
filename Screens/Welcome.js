import React from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import { Text, View } from "react-native";

export default function Welcome({ navigation }) {
  return (
    // <Text>Welcome</Text>

    <Background>
      <View style={{ position: "absolute", top: 120 }}>
        <Logo />
        <Header> BLOODNET </Header>
      </View>
      <Button
        mode="contained"
        style={{
          backgroundColor: "#f72b2b",
        }}
        onPress={() => navigation.navigate("Login")}
      >
        Login
      </Button>
      <Button mode="outlined" onPress={() => navigation.navigate("Signup")}>
        Sign Up
      </Button>
    </Background>
  );
}
