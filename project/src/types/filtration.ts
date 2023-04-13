import { Offer, Offers } from './offer';

export const SortTypes = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first',];

export const sortByPopularity = (placeA: Offer, placeB: Offer) => 0;

export const sortByLowToHigh = (locationA: Offer, locationB: Offer) =>
  locationA.price - locationB.price;

export const sortByHightToLow = (locationA: Offer, locationB: Offer) =>
  locationB.price - locationA.price;

export const sortByRated = (locationA: Offer, locationB: Offer) =>
  locationB.rating - locationA.rating;

export const filtrationType: { [key:string]: (locationA: Offer, locationB: Offer) => number} = {
  'Popular' : sortByPopularity,
  'Price: low to high' : sortByLowToHigh,
  'Price: high to low' : sortByHightToLow,
  'Top rated first' : sortByRated,
};

export const filtrationByType = (offers: Offers, type: string) => [...offers].sort(filtrationType[type]);
