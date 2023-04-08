import {createAction} from '@reduxjs/toolkit';
import { CityName, Offer } from '../types/offers';
import { AuthorizationStatus, SORTS } from '../const';
import { UserData } from '../types/user-data';

export const changeCity = createAction(
  'city/changeCity',
  (city: CityName) => ({payload: city})
);

export const updateOfferList = createAction('offer/updateOfferList');

export const selectOffer = createAction(
  'offer/selectOffer',
  (offerId: number | null) => ({payload: offerId})
);

export const loadOffers = createAction<Offer[]>('data/loadOffers');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const setError = createAction<string | null>('data/setError');

export const changeSort = createAction('sort/changeSort',(sort: SORTS) => ({payload: sort}));

export const loadUserData = createAction('user/loadUserData',(userData: UserData) => ({payload: userData}));
