import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../../types/state';
import {Offer, OfferId} from '../../types/offers';
import {APIRoute } from '../../const';
import { Review, ReviewData } from '../../types/review';

export const fetchOfferItemAction = createAsyncThunk<Offer, OfferId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOfferItem',
  async (offerId, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offer>(`${APIRoute.Offers}/${offerId}`);
      return data;
    } catch {
      //dispatch(redirectToRoute(AppRoute.NotFound));
      throw new Error();
    }
  }
);

export const fetchNearOffersAction = createAsyncThunk<Offer[], OfferId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearOffers',
  async (offerId, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offer[]>(`${APIRoute.Offers}/${offerId}/nearby`);
      return data;
    } catch (error) {
      throw new Error();
    }
  }
);

export const fetchReviewAction = createAsyncThunk<Review[], OfferId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviewAction',
  async (offerId, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Review[]>(`${APIRoute.Reviews}/${offerId}`);
      return data;
    } catch (error) {
      throw new Error();
    }
  }
);

export const sendReviewAction = createAsyncThunk<Review[], ReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendReviewAction',
  async ({id, rating, comment}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<Review[]>(`${APIRoute.Reviews}/${id}`, {rating, comment});
      return data;
    } catch (error) {
      throw new Error();
    }
  }
);

