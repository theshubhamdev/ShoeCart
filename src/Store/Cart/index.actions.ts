import { clearCart } from ".";
import { AppDispatch, RootStateFn } from "..";
import { traceStoreAction } from "../../Utils";
import { updateStocks } from "../Products";

export const clearCartAndUpdateProducts = () => {
  traceStoreAction("clearCartAndUpdateProducts");
  return async (dispatch: AppDispatch, getState: RootStateFn) => {
    const state = await getState();
    state.cart.items.forEach((cartItem) => {
      const product = state.products.data.find(
        (p) => p.id === cartItem.productId
      );
      const productIdx = state.products.data.findIndex(
        (p) => p.id === cartItem.productId
      );
      if (product && productIdx) {
        const option = product.options.find((o) => o.id === cartItem.optionId);
        const optionIdx = product.options.findIndex(
          (o) => o.id === cartItem.optionId
        );
        if (option && Number(option.availableQty) >= cartItem.quantity) {
          option.availableQty = Number(option.availableQty) - cartItem.quantity;
          const updatedProductStock = state.products;
          updatedProductStock.data[productIdx].options[
            optionIdx
          ] = option;
          dispatch(updateStocks(updatedProductStock.data));
        }
      }
    });
    dispatch(clearCart());
  };
};
