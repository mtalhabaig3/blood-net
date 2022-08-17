import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { onAuthStateChanged } from "firebase/auth";
import Welcome from "../Screens/Welcome";
import Signup from "../Screens/Signup";
import Login from "../Screens/Login";
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import Requests from "../Screens/Requests";
import Request from "../Screens/Request";
import Availables from "../Screens/Availables";
import Available from "../Screens/Available";
import ApplyDonation from "../Screens/ApplyDonation";
import ApplyRequest from "../Screens/ApplyRequest";
import Option from "../Screens/Option";
import { auth } from "../firebase";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const [currUser, setCurrUser] = useState(null);
  // const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrUser(user);
      } else {
        setCurrUser(null);
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <NavigationContainer>
      {!currUser ? (
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Requests"
            component={Requests}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Request"
            component={Request}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Availables"
            component={Availables}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Available"
            component={Available}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="ApplyDonation"
            component={ApplyDonation}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="ApplyRequest"
            component={ApplyRequest}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Option"
            component={Option}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
