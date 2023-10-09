import AsyncStorage from "@react-native-async-storage/async-storage";
import { ProductsItem } from "./index.types";

export const saveData = async (products: ProductsItem[]) => {
    try {
      const serializedData = JSON.stringify(products);
      await AsyncStorage.setItem('productsData', serializedData);
      console.log('Products data saved successfully');
    } catch (error) {
      console.error('Error saving products data:', error);
    }
};
  
export const getProductsData = async () => {
    try {
      const serializedProductsData = await AsyncStorage.getItem('productsData');
      if (serializedProductsData !== null) {
        const productsData = JSON.parse(serializedProductsData);
        console.log('Retrieved products data:', productsData);
        return productsData;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error retrieving shoe data:', error);
      return null;
    }
  };
  