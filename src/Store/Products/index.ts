import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductsState } from "./index.types";
import { RootState } from "..";
import data from '../../../Assets/shoes';
import { getProductsData, saveData } from "./index.actions";

const initialState: ProductsState = {
  data: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    retriveData: (state) => {
      
    },
    updateStocks: (state, action: PayloadAction<ProductsState['data']>) => {
      const data = action.payload;
      state.data = data;
      saveData(data);
      console.log(JSON.stringify(state.data[0], "", 2));
    }
  },
});

export const {updateStocks} = productsSlice.actions;

export const productsSliceValue = (state: RootState) => state.products;

export default productsSlice.reducer;
