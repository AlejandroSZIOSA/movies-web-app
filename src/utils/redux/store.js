import MOVIES_JSON from "/src/services/json/movies.json";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initial_state = {
  product_list: MOVIES_JSON,
  cart_list: [],
  total_products: 0,
};

const operationsSlice = createSlice({
  name: "operations_redux",
  initialState: initial_state,
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
    /* CHANGE_QUANTITY(state, action) {
      // Mutating the array directly
      const { id } = action.payload.p;
      let newQuantity = action.payload.newQuantity;
      const existingProduct = state.cart_list.find((p) => p.id === id);
      if (existingProduct) {
        existingProduct.quantity = newQuantity;
      }
    }, */

    CHANGE_QUANTITY_TEST(state, action) {
      state.total_products = action.payload;
    },

    /* CHANGE_TOTAL_SUMMA(state, action) {
      state.totalSuma = action.payload.totalSuma;
    }, */
  },
});

const store = configureStore({ reducer: operationsSlice.reducer });

export const operations_Slice_Actions = operationsSlice.actions;

export default store;
