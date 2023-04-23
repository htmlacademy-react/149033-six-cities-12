import { SORTS } from '../../const';
import { Offer } from '../../types/offers';
import { sortingOffersPriceDown, sortingOffersPriceUp, sortingOffersRatingDown } from '../../utils/utils';

export function useSort(offers: Offer[], sortingType: string | null) {
  const sortedOffers = [...offers];
  switch(sortingType) {
    case SORTS.LowToHigh:
      return sortedOffers.sort(sortingOffersPriceUp);
    case SORTS.HighToLow:
      return sortedOffers.sort(sortingOffersPriceDown);
    case SORTS.TopFirst:
      return sortedOffers.sort(sortingOffersRatingDown);
    default:
      return sortedOffers;
  }
}
