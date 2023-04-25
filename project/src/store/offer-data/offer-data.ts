import {createSlice} from '@reduxjs/toolkit';
import {fetchOfferItemAction, fetchNearOffersAction, fetchReviewAction, sendReviewAction} from './api-actions';
import {NameSpace} from '../../const';
import { Offer } from '../../types/offers';
import { Review } from '../../types/review';

export type OfferDataState = {
  isOfferDataLoading: boolean;
  offerItem: Offer | null;
  nearOffers: Offer[] | null;
  reviews: Review[] | null;
};


const initialState: OfferDataState = {
  isOfferDataLoading: false,
  offerItem: null,
  nearOffers: null,
  reviews: null,
};

export const offerData = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferItemAction.pending, (state) => {
        state.isOfferDataLoading = true;
      })
      .addCase(fetchOfferItemAction.fulfilled, (state, action) => {
        state.isOfferDataLoading = false;
        state.offerItem = action.payload;
      })
      .addCase(fetchOfferItemAction.rejected, (state) => {
        state.isOfferDataLoading = false;
      })
      .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
        state.nearOffers = action.payload;
      })
      .addCase(fetchReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(sendReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      });
  }
});
