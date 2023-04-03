import {createReducer} from '@reduxjs/toolkit';
import { Offer } from '../types/offers';
import { offers } from '../mocks/offers';
import { changeCity, updateOfferList, selectOffer} from './action';
import { CityName } from '../types/offers';

const START_CITY = 'Paris';

type InitialState = {
  city: CityName;
  offers: Offer[];
  selectedOfferId: number | null;
};


const initialState: InitialState = {
  city: START_CITY ,
  offers: offers.filter((offer) => offer.city.name === START_CITY),
  selectedOfferId: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, {payload}) => {
      state.city = payload;
    })
    .addCase(updateOfferList, (state) => {
      state.offers = offers.filter((offer)=> offer.city.name === state.city);
    })
    .addCase(selectOffer, (state, {payload}) => {
      state.selectedOfferId = payload;
    });
});
