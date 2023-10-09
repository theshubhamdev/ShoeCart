import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import { HomeScreen } from "./src/Screens";
import { SafeAreaProvider } from "react-native-safe-area-context";
import colors from "./src/Theme/Color";
import Navigation from "./src/Navigation";
import { Provider } from "react-redux";
import { store } from "./src/Store";

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <StatusBar backgroundColor={colors.black} barStyle={"light-content"} />
        <Navigation />
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
