import PRODUCTS_JSON from "/src/services/json/products.json";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: PRODUCTS_JSON,
  cart_list: [],
  total_products: 0,
};

const operationsSlice = createSlice({
  name: "operations",
  initialState: initialState,
  reducers: {
    /* ADD_PRODUCT(state, action) {
      // Mutating the array directly
      state.cartList.push(action.payload);
    },

    REMOVE_PRODUCT(state, action) {
      // Mutating the array directly
      const index = state.cartList.findIndex((p) => p.id === action.payload);
      if (index !== -1) state.cartList.splice(index, 1);
    },
 */
    CHANGE_QUANTITY(state, action) {
      // Mutating the array directly
      const { id } = action.payload.p;
      let newQuantity = action.payload.newQuantity;
      const existingProduct = state.cartList.find((p) => p.id === id);
      if (existingProduct) {
        existingProduct.quantity = newQuantity;
      }
    },

    /* CHANGE_TOTAL_SUMMA(state, action) {
      state.totalSuma = action.payload.totalSuma;
    }, */
  },
});

const store = configureStore({ reducer: operationsSlice.reducer });

export const operationsSliceActions = operationsSlice.actions;

export default store;
