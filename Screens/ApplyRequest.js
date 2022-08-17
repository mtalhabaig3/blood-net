import React, { Component } from "react";
import {
  TextInput,
  Text,
  Button,
  Alert,
  View,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import * as yup from "yup";
import BackButton from "../components/BackButton";
import { Formik } from "formik";
import * as mocks from "../core/mocks";
import * as theme from "../theme";

const ApplyRequest = ({ navigation }) => {
  const inputStyle = {
    borderWidth: 1,
    borderColor: "#4e4e4e",
    padding: 12,
    marginBottom: 5,
  };

  function changingObject(values) {
    const temp = { ...values };
    temp.id = mocks.allAvailables.length + 1;
    temp.distance = 44;
    temp.time = 2;
    mocks.allAvailables.unshift(temp);
    Alert.alert("done");
    navigation.pop(2);
  }

  return (
    <SafeAreaView>
      <Formik
        initialValues={{
          name: "",
          age: "",
          gender: "",
          location: "",
          contact: "",
          bloodType: "",
          priority: "",
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
          priority: yup.string().required(),
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
              value={values.name}
              style={inputStyle}
              onChangeText={handleChange("name")}
              onBlur={() => setFieldTouched("name")}
              placeholder="Name"
            />
            {touched.name && errors.name && (
              <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                {errors.name}
              </Text>
            )}
            <TextInput
              value={values.age}
              style={inputStyle}
              onChangeText={handleChange("age")}
              onBlur={() => setFieldTouched("age")}
              placeholder="age"
            />
            {touched.age && errors.age && (
              <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                {errors.age}
              </Text>
            )}
            <TextInput
              value={values.gender}
              style={inputStyle}
              onChangeText={handleChange("gender")}
              placeholder="gender"
              onBlur={() => setFieldTouched("gender")}
            />
            {touched.gender && errors.gender && (
              <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                {errors.gender}
              </Text>
            )}
            <TextInput
              value={values.location}
              style={inputStyle}
              onChangeText={handleChange("location")}
              placeholder="location"
              onBlur={() => setFieldTouched("location")}
            />
            {touched.location && errors.location && (
              <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                {errors.location}
              </Text>
            )}
            <TextInput
              value={values.contact}
              style={inputStyle}
              onChangeText={handleChange("contact")}
              placeholder="contact"
              onBlur={() => setFieldTouched("contact")}
            />
            {touched.contact && errors.contact && (
              <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                {errors.contact}
              </Text>
            )}
            <TextInput
              value={values.bloodType}
              style={inputStyle}
              onChangeText={handleChange("bloodType")}
              placeholder="bloodType"
              onBlur={() => setFieldTouched("bloodType")}
            />
            {touched.bloodType && errors.bloodType && (
              <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                {errors.bloodType}
              </Text>
            )}
            <TextInput
              value={values.priority}
              style={inputStyle}
              onChangeText={handleChange("priority")}
              placeholder="priority"
              onBlur={() => setFieldTouched("priority")}
            />
            {touched.priority && errors.priority && (
              <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                {errors.priority}
              </Text>
            )}
            <Button
              color={theme.colors.primary}
              title="Request"
              disabled={!isValid}
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
      <BackButton goBack={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

export default ApplyRequest;
const styles = StyleSheet.create({
  formContainer: {
    padding: 50,
  },
});
console.disableYellowBox = true;
