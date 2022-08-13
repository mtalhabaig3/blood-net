import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  Alert,
  Image,
} from "react-native";
import { Text } from "react-native-paper";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { theme } from "../core/theme";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import { nameValidator } from "../helpers/nameValidator";

export default function Signup({ navigation }) {
  const [displayName, setDisplayName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  function onSignUpPressed() {
    const displayNameError = nameValidator(displayName.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError || displayNameError) {
      setDisplayName({ ...setDisplayName, error: displayNameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });

      return;
    }
    Keyboard.dismiss();

    Alert.alert(
      "Success!",
      "Account created!",
      [
        {
          text: "great!",
        },
      ],
      { cancelable: false }
    );
  }

  return (
    <Background>
      <BackButton goBack={() => navigation.goBack()} />
      <Logo />
      <Header>Create Account</Header>
      <TouchableOpacity
        onPress={handleProfilePicture}
        style={{
          marginTop: 10,
          borderRadius: 120,
          width: 80,
          height: 80,
          backgroundColor: "#198ace",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {!selectedImage ? (
          <MaterialCommunityIcons
            name="camera-plus"
            color="white"
            size={45}
            style={{ paddingBottom: 5 }}
          />
        ) : (
          <Image
            source={{ uri: selectedImage }}
            style={{ width: "100%", height: "100%", borderRadius: 120 }}
          />
        )}
      </TouchableOpacity>
      <TextInput
        label="Name"
        returnKeyType="next"
        value={displayName.value}
        onChangeText={(text) => setDisplayName({ value: text, error: "" })}
        error={!!displayName.error}
        errorText={displayName.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace("LoginScreen")}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  link: {
    fontWeight: "bold",
    color: "#198ace",
  },
});
