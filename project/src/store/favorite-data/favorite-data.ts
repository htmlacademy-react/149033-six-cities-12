import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { fetchFavoritesAction, setFavoritesAction } from './api-actions';
import { Offer } from '../../types/offers';

type FavoritesData = {
  favorites: Offer[];
  setStatus: boolean | null;
};

const initialState: FavoritesData = {
  favorites: [],
  setStatus: null,
};

export const FavoriteData = createSlice({
  name: NameSpace.Favorite,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.setStatus = null;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.setStatus = true;
        state.favorites = action.payload;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.setStatus = false;
      })
      .addCase(setFavoritesAction.pending, (state) => {
        state.setStatus = null;
      })
      .addCase(setFavoritesAction.fulfilled, (state, action) => {
        state.setStatus = true;

        if (action.payload.isFavorite) {
          state.favorites.push(action.payload);
        } else {
          state.favorites = state.favorites.filter(({id}) => id !== action.payload.id);
        }
      })
      .addCase(setFavoritesAction.rejected, (state) => {
        state.setStatus = false;
      });
  },
});
