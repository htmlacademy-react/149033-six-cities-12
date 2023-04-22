import { NameSpace } from '../../const';
import { Offer } from '../../types/offers';
import { Review } from '../../types/review';
import { State } from '../../types/state';

const getOfferItem = (state: State): Offer | null=> state[NameSpace.Offer].offerItem;
const getNearOffers = (state: State): Offer[] | null=> state[NameSpace.Offer].nearOffers;
const getIsOfferDataLoading = (state: State): boolean=> state[NameSpace.Offer].isOfferDataLoading;
const getReviews = (state: State): Review[] | null => state[NameSpace.Offer].reviews;

export { getOfferItem, getNearOffers, getIsOfferDataLoading, getReviews };
