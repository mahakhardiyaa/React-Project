import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: JSON.parse(localStorage.getItem("favorites")) || [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const movie = action.payload; 
      const exists = state.movies.some((fav) => fav.imdbID === movie.imdbID);
      if (!exists) {
        state.movies.push(movie); 
        localStorage.setItem("favorites", JSON.stringify(state.movies));
      }
    },
    removeFromFavorites: (state, action) => {
      const imdbID = action.payload;
      state.movies = state.movies.filter((movie) => movie.imdbID !== imdbID);
      localStorage.setItem("favorites", JSON.stringify(state.movies));
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
