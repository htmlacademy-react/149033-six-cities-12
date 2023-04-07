import {createReducer} from '@reduxjs/toolkit';
import { Offer } from '../types/offers';
import { changeCity, selectOffer, loadOffers, requireAuthorization, setError, changeSort, setOffersDataLoadingStatus} from './action';
import { CityName } from '../types/offers';
import { AuthorizationStatus, SORTS } from '../const';

const START_CITY = 'Paris';

type InitialState = {
  city: CityName;
  offers: Offer[];
  selectedOfferId: number | null;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  error: string | null;
  sortType: SORTS;
};


const initialState: InitialState = {
  city: START_CITY ,
  offers: [],
  selectedOfferId: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  error: null,
  sortType: SORTS.Popular
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, {payload}) => {
      state.city = payload;
    })
    .addCase(selectOffer, (state, {payload}) => {
      state.selectedOfferId = payload;
    })
    .addCase(loadOffers, (state, {payload}) => {
      state.offers = payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, {payload}) => {
      state.isOffersDataLoading = payload;
    })
    .addCase(requireAuthorization, (state, {payload}) => {
      state.authorizationStatus = payload;
    })
    .addCase(setError, (state, {payload}) => {
      state.error = payload;
    })
    .addCase(changeSort, (state, {payload}) => {
      state.sortType = payload;
    });
});
