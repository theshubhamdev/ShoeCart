import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartScreen } from "../Screens";
import { CustomerStackParamList } from "../Types/navigation";
import CustomerScreen from "../Screens/CustomerScreen";

const Stack = createNativeStackNavigator<CustomerStackParamList>();
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
