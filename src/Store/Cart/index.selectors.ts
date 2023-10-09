import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

// Select the items from the cart and products slices
const selectCartItems = (state: RootState) => state.cart.items;
const selectProducts = (state: RootState) => state.products.data;

export const selectTotalPrice = createSelector(
  [selectCartItems, selectProducts],
  (cartItems, products) => {
    let totalPrice = 0;

    // Iterate through the cart items and calculate the total price
    cartItems.forEach((cartItem) => {
      const product = products.find((p) => p.id === cartItem.productId);
      if (product) {
        const option = product.options.find((o) => o.id === cartItem.optionId);
        if (option) {
          totalPrice += Number(option.price) * cartItem.quantity;
        }
      }
    });

    return totalPrice;
  }
);
