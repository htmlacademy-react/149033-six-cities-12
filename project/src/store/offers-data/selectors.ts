import { NameSpace, SORTS } from '../../const';
import { Offer } from '../../types/offers';
import { State } from '../../types/state';

const getOffers = (state: State) => state[NameSpace.Offers].offers;
const getCity = (state: State) => state[NameSpace.Offers].city;
const getIsOffersDataLoading = (state: State) => state[NameSpace.Offers].isOffersDataLoading;
const getSort = (state: State): SORTS => state[NameSpace.Offers].sortType;

const getOffersByCity = (state: State): Offer[] => state[NameSpace.Offers].offers.filter((offer) => offer.city.name === state[NameSpace.Offers].city);


export { getOffers, getCity, getIsOffersDataLoading, getSort, getOffersByCity };
