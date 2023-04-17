import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchOffersAction} from './api-actions';
import { Offer} from '../../types/offers';
import {SORTS, NameSpace} from '../../const';
import { CityName } from '../../types/offers';

const START_CITY = 'Paris';

type OffersDataState = {
  city: CityName;
  offers: Offer[];
  selectedOfferId: number | null;
  isOffersDataLoading: boolean;
  error: string | null;
  sortType: SORTS;
};

const initialState: OffersDataState = {
  city: START_CITY,
  offers: [] as Offer[],
  selectedOfferId: null,
  isOffersDataLoading: false,
  error: null,
  sortType: SORTS.Popular,
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<CityName>) => {
      state.city = action.payload;
    },
    changeSort: (state, action: PayloadAction<SORTS>) => {
      state.sortType = action.payload;
    },
    selectOffer: (state, action: PayloadAction<number | null>) => {
      state.selectedOfferId = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.error = 'ошибка';
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.isOffersDataLoading = false;
        state.offers = action.payload;
      });
  }
});

export const {changeCity, changeSort, selectOffer} = offersData.actions;
