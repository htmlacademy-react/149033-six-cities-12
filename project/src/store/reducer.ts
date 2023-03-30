import {createReducer} from '@reduxjs/toolkit';
import { Offer } from '../types/offers';
import { offers } from '../mocks/offers';
import { changeCity, updateOfferList} from './action';

const START_CITY = 'Paris';

type InitialState = {
  city: string;
  offers: Offer[];
};

const initialState: InitialState = {
  city: START_CITY,
  offers: offers.filter((offer) => offer.city.name === START_CITY),
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(updateOfferList, (state) => {
      state.offers = offers.filter((offer)=> offer.city.name === state.city);
    });
});
