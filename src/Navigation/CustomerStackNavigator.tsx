import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartScreen, HomeScreen } from "../Screens";
import { HomeStackParamList } from "../Types/navigation";
import CustomerScreen from "../Screens/CustomerScreen";

const Stack = createNativeStackNavigator<HomeStackParamList>();
const CustomerStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CustomerHome"
        component={CustomerScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default CustomerStackNavigator;
