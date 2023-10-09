import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootNavigatorParamList } from "../Types/navigation";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { AdminScreen, HomeScreen } from "../Screens";
import CustomerStackNavigator from "./CustomerStackNavigator";
import AdminStackNavigator from "./AdminStackNavigator";
import { updateStocks } from "../Store/Products";
import { getProductsData } from "../Store/Products/index.actions";

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const Navigation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const asycfn = async () => {
      const data = await getProductsData();
      console.log(data);
      if (data) {
        dispatch(updateStocks(data));
      }
    };
    asycfn();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Admin" component={AdminStackNavigator} />
        <Stack.Screen name="Customer" component={CustomerStackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
