import { NameSpace } from '../../const';
import { City, Offers, Offer } from '../../types/offer';
import { Reviews } from '../../types/review';
import { State } from '../../types/state';

export const getCityName = (state: State): City['name'] => state[NameSpace.Data].cityName;
export const getOffers = (state: State): Offers => state[NameSpace.Data].offers;
export const getCompletionOfOffers = (state: State): boolean => state[NameSpace.Data].isCompletionOfOffers;

export const getActiveOffer = (state: State): Offer | null => state[NameSpace.Data].activeOffer;


export const getReviews = (state: State): Reviews => state[NameSpace.Data].reviews;

export const getActiveOffersNearby = (state: State): Offers => state[NameSpace.Data].activeOffersNearby;

export const getActiveOfferStatus = (state: State): boolean => state[NameSpace.Data].isActiveOfferStatus;
export const createReviewIsSuccess = (state: State): boolean => state[NameSpace.Data].isSuccessReviewAdded;
