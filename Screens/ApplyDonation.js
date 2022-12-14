import React, { Component } from "react";
import {
  Button,
  Alert,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Block, Text } from "../components";

import TextInput from "../components/TextInput";
import * as yup from "yup";
import BackButton from "../components/BackButton";
import { Formik } from "formik";
import * as mocks from "../core/mocks";
import * as theme from "../theme";

const ApplyDonation = ({ navigation }) => {
  const inputStyle = {};

  function changingObject(values) {
    const temp = { ...values };
    temp.id = mocks.allAvailables.length + 1;
    temp.distance = Math.floor(Math.random() * 30) + 10;
    temp.time = Math.floor(Math.random() * 12) + 10;

    console.log(temp);
    mocks.allAvailables.unshift(temp);
    Alert.alert("done");
    navigation.pop(2);
  }

  return (
    <SafeAreaView>
      <Text h2 black center>
        Add Donation to List
      </Text>
      <Formik
        initialValues={{
          name: "",
          age: "",
          gender: "",
          location: "",
          contact: "",
          bloodType: "",
        }}
        onSubmit={(values) => {
          changingObject(values);
        }}
        validationSchema={yup.object().shape({
          name: yup.string().required("Please, provide your name!"),
          age: yup.number().required().min(18).max(99),
          gender: yup.string().required(),
          location: yup.string().required(),
          contact: yup.number().required(),
          bloodType: yup.string().required(),
        })}
      >
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          isValid,
          handleSubmit,
        }) => (
          <View style={styles.formContainer}>
            <TextInput
              label="Name"
              value={values.name}
              style={inputStyle}
              onChangeText={handleChange("name")}
              // onBlur={() => setFieldTouched("name")}
              placeholder="Name"
            />
            {touched.name && errors.name && (
              <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                {errors.name}
              </Text>
            )}
            <TextInput
              label="age"
              value={values.age}
              style={inputStyle}
              onChangeText={handleChange("age")}
              // onBlur={() => setFieldTouched("age")}
              placeholder="age"
            />
            {touched.age && errors.age && (
              <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                {errors.age}
              </Text>
            )}
            <TextInput
              label="gender"
              value={values.gender}
              style={inputStyle}
              onChangeText={handleChange("gender")}
              placeholder="gender"
              // onBlur={() => setFieldTouched("gender")}
            />
            {touched.gender && errors.gender && (
              <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                {errors.gender}
              </Text>
            )}
            <TextInput
              label="location"
              value={values.location}
              style={inputStyle}
              onChangeText={handleChange("location")}
              placeholder="location"
              // onBlur={() => setFieldTouched("location")}
            />
            {touched.location && errors.location && (
              <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                {errors.location}
              </Text>
            )}
            <TextInput
              label="contact"
              value={values.contact}
              style={inputStyle}
              onChangeText={handleChange("contact")}
              placeholder="contact"
              // onBlur={() => setFieldTouched("contact")}
            />
            {touched.contact && errors.contact && (
              <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                {errors.contact}
              </Text>
            )}
            <TextInput
              label="bloodType"
              value={values.bloodType}
              style={inputStyle}
              onChangeText={handleChange("bloodType")}
              placeholder="bloodType"
              // onBlur={() => setFieldTouched("bloodType")}
            />
            {touched.bloodType && errors.bloodType && (
              <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                {errors.bloodType}
              </Text>
            )}
            <View
              style={{
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                style={styles.btn}
                disabled={!isValid}
                onPress={handleSubmit}
              >
                <Button
                  color="white"
                  title="Ready to donate!"
                  disabled={!isValid}
                  onPress={handleSubmit}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
      <BackButton goBack={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

export default ApplyDonation;
const styles = StyleSheet.create({
  formContainer: {
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
  btn: {
    height: 50,
    width: 270,
    backgroundColor: "#f72b2b",
    borderRadius: 80,
    marginLeft: 65,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 50,
    marginTop: 30,
    // position: "absolute",
    // bottom: 320,
  },
  btnTxt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
  },
});
console.disableYellowBox = true;
