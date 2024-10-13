import MOVIES_JSON from "/src/services/json/movies.json";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorite_list: [],
  },
  reducers: {
    ADD_PRODUCT(state, action) {
      // Mutating the array directly
      state.favorite_list.push(action.payload);
    },

    //Remove Item by Id
    REMOVE_FAVORITE(state, action) {
      const itemId = action.payload;
      state.favorite_list = state.favorite_list.filter(
        (item) => item.id !== itemId
      );
    },

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

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movie_list: MOVIES_JSON,
  },
  reducers: {
    /* TODO */
  },
});

const store_ = configureStore({
  //Configure multiple Slices
  reducer: { favorites_: favoritesSlice.reducer, movies_: moviesSlice.reducer },
});

export const favorites_Slice_Actions = favoritesSlice.actions;
export const movies_Slice_Actions = moviesSlice.actions;

export default store_;
