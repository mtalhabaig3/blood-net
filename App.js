import React from "react";
import Navigation from "./Navigation/navigation";
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  'Warning: AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from "@react-native-async-storage/async-storage" instead of "react-native". See https://github.com/react-native-async-storage/async-storage',
]);
LogBox.ignoreAllLogs();

const App = () => {
  return <Navigation />;
};

export default App;
