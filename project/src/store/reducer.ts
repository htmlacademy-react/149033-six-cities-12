import {createReducer} from '@reduxjs/toolkit';
import { Offer } from '../types/offers';
import { changeCity, selectOffer, loadOffers, requireAuthorization, setError, changeSort, setOffersDataLoadingStatus, loadUserData, loadOfferItem, loadNearOffers, loadReviews} from './action';
import { CityName } from '../types/offers';
import { AuthorizationStatus, SORTS } from '../const';
import { UserData } from '../types/user-data';
import { Review } from '../types/review';

const START_CITY = 'Paris';

type InitialState = {
  city: CityName;
  offers: Offer[];
  selectedOfferId: number | null;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  error: string | null;
  sortType: SORTS;
  userData: UserData | null;
  offerItem: Offer | null;
  nearOffers: Offer[] | null;
  reviews: Review[] | null;
};


const initialState: InitialState = {
  city: START_CITY ,
  offers: [],
  selectedOfferId: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  error: null,
  sortType: SORTS.Popular,
  userData: null,
  offerItem: null,
  nearOffers: null,
  reviews: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    // .addCase(changeCity, (state, {payload}) => {
    //   state.city = payload;
    // })
    // .addCase(selectOffer, (state, {payload}) => {
    //   state.selectedOfferId = payload;
    // })
    // .addCase(loadOffers, (state, {payload}) => {
    //   state.offers = payload;
    // })

    .addCase(loadOfferItem, (state, {payload}) => {
      state.offerItem = payload;
    })
    .addCase(loadNearOffers, (state, {payload}) => {
      state.nearOffers = payload;
    })
    .addCase(loadReviews, (state, {payload}) => {
      state.reviews = payload;
    })

    .addCase(setOffersDataLoadingStatus, (state, {payload}) => {
      state.isOffersDataLoading = payload;
    })
    // .addCase(requireAuthorization, (state, {payload}) => {
    //   state.authorizationStatus = payload;
    // })
    // .addCase(loadUserData, (state, {payload}) => {
    //   state.userData = payload;
    // })
    .addCase(setError, (state, {payload}) => {
      state.error = payload;
    })
    // .addCase(changeSort, (state, {payload}) => {
    //   state.sortType = payload;
    // });
});
