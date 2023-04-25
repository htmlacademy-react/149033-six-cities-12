import { FavoritesData, favoriteData } from './favorite-data';
import { makeFakeOffer, makeFakeOffers } from '../../utils/mocks';
import {
  fetchFavoritesAction,
  setFavoritesAction,
} from './api-actions';

let fakeOffers = makeFakeOffers();

describe('Reducer: favorites', () => {
  let state: FavoritesData;

  beforeEach(() => {
    state = {
      favorites: [],
      setStatus: null,
    };
  });

  it('Should return initial state without additional parameters', () => {
    expect(favoriteData.reducer(undefined, { type: 'UNKNOWN_ACTION' })).toEqual({
      favorites: [],
      setStatus: null,
    });
  });

  describe('fetchFavoritesAction test', () => {
    it('fetchFavorites fulfilled', () => {

      expect(
        favoriteData.reducer(state, {
          type: fetchFavoritesAction.fulfilled.type,
          payload: fakeOffers,
        })
      ).toEqual({
        favorites: fakeOffers,
        setStatus: true,
      });
    });

    it('fetchFavorites rejected', () => {
      expect(
        favoriteData.reducer(state, {
          type: fetchFavoritesAction.rejected.type,
        })
      ).toEqual({
        favorites: [],
        setStatus: false,
      });
    });
  });

  describe('setFavoritesAction test', () => {
    it('setFavorites fulfilled', () => {
      const fakeNewOffer = makeFakeOffer();

      if (fakeNewOffer.isFavorite) {
        fakeOffers = [...fakeOffers, fakeNewOffer];
      } else {
        fakeOffers.filter((offer) => offer.id !== fakeNewOffer.id);
      }

      expect(
        favoriteData.reducer(state, { type: setFavoritesAction.fulfilled.type, payload: fakeOffers })
      ).toEqual({
        favorites: [],
        setStatus: true,
      });
    });
    it('setFavorites rejected', () => {
      expect(
        favoriteData.reducer(state, { type: setFavoritesAction.rejected.type })
      ).toEqual({
        favorites: [],
        setStatus: false,
      });
    });
  });
});

