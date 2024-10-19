import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { MY_BEARER_TOKEN, BASE_API_URL } from "../../services/api-host";

export const fetchMovies_ = createAsyncThunk(
  "movies/fetchMovies_",
  async () => {
    const res = await fetch(BASE_API_URL, {
      headers: {
        Authorization: `Bearer ${MY_BEARER_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data.results; //Payload
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
      .addCase(fetchMovies_.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies_.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movie_list = action.payload;
      })
      .addCase(fetchMovies_.rejected, (state, action) => {
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
export const FAVORITES_SLICE_ACTIONS = favoritesSlice.actions;
export const MOVIES_SLICE_ACTIONS = moviesSlice.actions;

export default store_;
