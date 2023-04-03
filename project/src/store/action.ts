import {createAction} from '@reduxjs/toolkit';
import { CityName } from '../types/offers';

export const changeCity = createAction(
  'city/changeCity',
  (city: CityName) => ({payload: city})
);

export const updateOfferList = createAction('offer/updateOfferList');

export const selectOffer = createAction(
  'offer/selectOffer',
  (offerId: number | null) => ({payload: offerId})
);
