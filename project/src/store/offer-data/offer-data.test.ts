import { makeFakeNearOffers, makeFakeOffer, makeFakeReviews } from '../../utils/mocks';
import { fetchNearOffersAction, fetchOfferItemAction, fetchReviewAction, sendReviewAction } from './api-actions';
import { OfferDataState, offerData } from './offer-data';

const fakeOffer = makeFakeOffer();
const fakeReviews = makeFakeReviews();
const fakeNearOffers = makeFakeNearOffers();

describe('reducer: offerData', () => {
  let state: OfferDataState;

  beforeEach(() => {
    state = {
      isOfferDataLoading: false,
      offerItem: null,
      nearOffers: null,
      reviews: null,
    };
  });

  it('Should return initial state without additional parameters', () => {
    expect(offerData.reducer(void 0, { type: 'UNKNOWN_ACTION' })).toEqual(
      state
    );
  });

  describe('Action: fetchOfferItemAction', () => {
    it('should update to isOfferDataLoading true if fetchOfferItemAction.pending', () => {
      expect(
        offerData.reducer(state, {
          type: fetchOfferItemAction.pending.type,
        })
      ).toEqual({ ...state, isOfferDataLoading: true });
    });

    it('should update  to Success and loaded offer if fetchOfferItemAction.fulfilled', () => {
      expect(
        offerData.reducer(state, {
          type: fetchOfferItemAction.fulfilled.type,
          payload: fakeOffer,
        })
      ).toEqual({
        ...state,
        isOfferDataLoading: false,
        offerItem: fakeOffer,
      });
    });

    it('should update status to "Failed" if action rejected', () => {
      expect(
        offerData.reducer(state, {
          type: fetchOfferItemAction.rejected.type,
        })
      ).toEqual({ ...state, isOfferDataLoading: false });
    });
  });

  describe('Action: fetchReviewAction', () => {
    it('should loaded reviews if action fulfilled', () => {
      expect(
        offerData.reducer(state, {
          type: fetchReviewAction.fulfilled.type, payload: fakeReviews
        })
      ).toEqual({...state, reviews: fakeReviews});
    });
  });

  describe('Action: fetchNearOffersAction', () => {

    it('should loaded nearOffers if action fulfilled', () => {
      expect(
        offerData.reducer(state, {
          type: fetchNearOffersAction.fulfilled.type, payload: fakeNearOffers
        })
      ).toEqual({...state, nearOffers: fakeNearOffers});
    });
  });

  describe('Action: sendReviewAction', () => {

    it('should update form block status to "Success" if action fulfilled', () => {
      expect(offerData.reducer(state, {type: sendReviewAction.fulfilled.type, payload: fakeReviews}))
        .toEqual({...state, reviews: fakeReviews});
    });
  });
});
