import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItem, CartState } from "./index.types";
import { RootState } from "..";

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) =>
          newItem.productId === item.productId &&
          newItem.optionId === item.optionId
      );

      if (existingItem) {
        // If the item is already in the cart, increase the quantity
        existingItem.quantity++;
      } else {
        // If the item is not in the cart, add it
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.optionId === itemId
      );

      if (existingItemIndex !== -1) {
        // If the item is in the cart, remove it
        state.items.splice(existingItemIndex, 1);
      }
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.optionId === itemId);

      if (existingItem) {
        // Increment the quantity of the item in the cart
        existingItem.quantity++;
      }
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.optionId === itemId);

      if (existingItem) {
        // Decrement the quantity of the item in the cart
        if (existingItem.quantity > 1) {
          existingItem.quantity--;
        }
      }
    },
    clearCart: (state) => {
      // Clear all items from the cart
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export const cartSliceValue = (state: RootState) => state.cart;

export default cartSlice.reducer;
