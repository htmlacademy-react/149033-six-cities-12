import { Offer } from '../types/offers';
import { Review } from '../types/review';

const WIDTH_STARS = 5;
export const calcRating = (rating: number) => `${Math.round(rating) / WIDTH_STARS * 100}%`;

export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export function sortingOffersPriceUp(offer: Offer, offerNext: Offer) {
  return offer.price - offerNext.price;
}

export function sortingOffersPriceDown(offer: Offer, offerNext: Offer) {
  return offerNext.price - offer.price;
}

export function sortingOffersRatingDown(offer: Offer, offerNext: Offer) {
  return offerNext.rating - offer.rating;
}

export const sortReviews = (reviews: Review[]): Review[] =>
  [...reviews].sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
