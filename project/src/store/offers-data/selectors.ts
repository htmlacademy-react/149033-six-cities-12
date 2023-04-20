import { NameSpace, SORTS } from '../../const';
import { CityName, Offer } from '../../types/offers';
import { State } from '../../types/state';

const getOffers = (state: State) => state[NameSpace.Offers].offers;
const getCity = (state: State) => state[NameSpace.Offers].city;
const getIsOffersDataLoading = (state: State) => state[NameSpace.Offers].isOffersDataLoading;
const getSort = (state: State): SORTS => state[NameSpace.Offers].sortType;

const getOffersByCity = (state: State): Offer[] => state[NameSpace.Offers].offers.filter((offer) => offer.city.name === state[NameSpace.Offers].city);
const getListCity = (state: State): CityName[] => Array.from(new Set( state[NameSpace.Offers].offers.map( (item) => item.city.name) ));
const getSelectedOfferId = (state: State): number | null => state[NameSpace.Offers].selectedOfferId;

export { getOffers, getCity, getIsOffersDataLoading, getSort, getOffersByCity, getListCity, getSelectedOfferId };
