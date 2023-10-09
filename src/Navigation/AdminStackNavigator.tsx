import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AdminStackParamList } from "../Types/navigation";
import { AdminScreen } from "../Screens";
import AddProductScreen from "../Screens/AddProductScreen";
import AllProductsScreen from "../Screens/AllProductsScreen";

const Stack = createNativeStackNavigator<AdminStackParamList>();
const AdminStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AdminHome"
        options={{
          title: "Admin"
        }}
        component={AdminScreen}
      />
      <Stack.Screen name="AddProduct" component={AddProductScreen} />
      <Stack.Screen name="AllProducts" component={AllProductsScreen} />
    </Stack.Navigator>
  );
};

export default AdminStackNavigator;
