import { makeFakeOffers } from '../../utils/mocks';
import { City, SORTS } from '../../const';
import { OffersDataState, START_CITY, changeCity, changeSort, offersData, selectOffer } from './offers-data';
import { fetchOffersAction } from './api-actions';

const fakeOffers = makeFakeOffers();

describe('reducer: offerData', () => {
  let state: OffersDataState;

  beforeEach(() => {
    state = {
      offers: [],
      city: START_CITY,
      selectedOfferId: null,
      isOffersDataLoading: false,
      sortType: SORTS.Popular,
      isServerError: false,
    };
  });

  it('Should return initial state without additional parameters', () => {
    expect(offersData.reducer(void 0, { type: 'UNKNOWN_ACTION' })).toEqual(
      state
    );
  });

  describe('Action: fetchOffersAction', () => {
    it('should update the offersStatus to isOffersDataLoading: true if fetchOffersAction.pending', () => {
      expect(
        offersData.reducer(state, {
          type: fetchOffersAction.pending.type,
        })
      ).toEqual({ ...state, isOffersDataLoading: true });
    });

    it('should update the offersStatus to isOffersDataLoading: true if fetchOffersAction.rejected', () => {
      expect(
        offersData.reducer(state, { type: fetchOffersAction.rejected.type })
      ).toEqual({ ...state, isOffersDataLoading: false, isServerError: true });
    });

    it('should update the status to isOffersDataLoading: false and loaded offers if fetchOffersAction.fulfilled', () => {
      expect(
        offersData.reducer(state, {
          type: fetchOffersAction.fulfilled.type,
          payload: fakeOffers,
        })
      ).toEqual({
        ...state,
        isOffersDataLoading: false,
        offers: fakeOffers,
        isServerError: false,
      });
    });
  });


  it('changeCity test', () => {

    expect(
      offersData.reducer(
        state,
        changeCity(City.Amsterdam)
      )
    ).toEqual({...state, city: City.Amsterdam});
  });

  it('changeSort test', () => {
    expect(
      offersData.reducer(
        state,
        changeSort(SORTS.HighToLow)
      )
    ).toEqual({ ...state, sortType: SORTS.HighToLow });
  });

  it('selectedOfferId test', () => {
    expect(
      offersData.reducer(
        state,
        selectOffer(10)
      )
    ).toEqual({ ...state, selectedOfferId: 10 });
  });

});
