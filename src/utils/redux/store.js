import MOVIES_JSON from "/src/services/json/movies.json";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "operations_redux",
  initialState: {
    favorite_list: [],
  },
  reducers: {
    ADD_PRODUCT(state, action) {
      // Mutating the array directly
      state.favorite_list.push(action.payload);
    },

    /*   REMOVE_PRODUCT(state, action) {
      // Mutating the array directly
      const index = state.cartList.findIndex((p) => p.id === action.payload);
      if (index !== -1) state.cartList.splice(index, 1);
    }, */

    /* CHANGE_QUANTITY(state, action) {
      // Mutating the array directly
      const { id } = action.payload.p;
      let newQuantity = action.payload.newQuantity;
      const existingProduct = state.cart_list.find((p) => p.id === id);
      if (existingProduct) {
        existingProduct.quantity = newQuantity;
      }
    }, */

    /* CHANGE_QUANTITY_TEST(state, action) {
      state.total_products = action.payload;
    }, */

    /* CHANGE_TOTAL_SUMMA(state, action) {
      state.totalSuma = action.payload.totalSuma;
    }, */
  },
});

const store = configureStore({ reducer: favoritesSlice.reducer });

export const operations_Slice_Actions = favoritesSlice.actions;

export default store;
