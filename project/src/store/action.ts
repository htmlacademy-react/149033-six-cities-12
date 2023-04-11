import {createAction} from '@reduxjs/toolkit';
import { CityName, Offer } from '../types/offers';
import { AppRoute, AuthorizationStatus, SORTS } from '../const';
import { UserData } from '../types/user-data';
import { Review } from '../types/review';

export const changeCity = createAction('city/changeCity',(city: CityName) => ({payload: city}));

export const updateOfferList = createAction('offer/updateOfferList');

export const selectOffer = createAction('offer/selectOffer',(offerId: number | null) => ({payload: offerId}));

export const loadOffers = createAction<Offer[]>('data/loadOffers');


export const loadOfferItem = createAction('data/loadOfferItem',(offerItem: Offer) => ({payload: offerItem}));

export const loadNearOffers = createAction('data/loadNearOffers',(nearestOffers: Offer[]) => ({payload: nearestOffers}));

export const loadReviews = createAction('data/loadReviews',(reviews: Review[]) => ({payload: reviews}));

export const setReviewFormBlocked = createAction('data/setReviewFormBlocked',(status: boolean) => ({payload: status}));


export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const setError = createAction<string | null>('data/setError');

export const changeSort = createAction('sort/changeSort',(sort: SORTS) => ({payload: sort}));

export const loadUserData = createAction('user/loadUserData',(userData: UserData) => ({payload: userData}));

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
