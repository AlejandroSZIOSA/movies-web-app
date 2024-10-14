import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_API_URL } from "../../services/api-host";
import { MY_BEARER_TOKEN } from "../../services/api-host";

// console.log(MY_BEARER_TOKEN);
export const fetch_movies = createAsyncThunk(
  "movies/fetch_movies",
  async () => {
    try {
      const res = await axios.get(BASE_API_URL, {
        headers: {
          Authorization: `Bearer ${MY_BEARER_TOKEN}`,
          "Content-Type": "application/json",
        },
      });
      return res.data.results; //Payload
    } catch (error) {
      console.error.message;
    }
  }
);

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
    movie_list: [],
    status: "idle",
    error: null,
  },
  reducers: {
    /* TODO */
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetch_movies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetch_movies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movie_list = action.payload;
      })
      .addCase(fetch_movies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

const store_ = configureStore({
  //Configure multiple Slices
  reducer: { favorites_: favoritesSlice.reducer, movies_: moviesSlice.reducer },
});

//Export multiple slices
export const favorites_Slice_Actions = favoritesSlice.actions;
export const movies_Slice_Actions = moviesSlice.actions;

export default store_;
