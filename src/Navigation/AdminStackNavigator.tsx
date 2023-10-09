import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartScreen, HomeScreen } from "../Screens";
import { HomeStackParamList } from "../Types/navigation";
import { AdminScreen } from "../Screens";
import AddProductScreen from "../Screens/AddProductScreen";
import AllProductsScreen from "../Screens/AllProductsScreen";

const Stack = createNativeStackNavigator<HomeStackParamList>();
const AdminStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AdminHome"
        component={AdminScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="AddProduct" component={AddProductScreen} />
      <Stack.Screen name="AllProducts" component={AllProductsScreen} />
    </Stack.Navigator>
  );
};

export default AdminStackNavigator;
