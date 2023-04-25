import { store } from '../store/index';
import { AuthorizationStatus } from '../const';
import { UserData } from './user-data';
import { Offer, Offers } from './offer';
import { Reviews } from './review';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
}

export type OfferProcess = {
  cityName: string;
  offers: Offers;
  reviews: Reviews;
  activeOffersNearby: Offers;
  activeOffer: Offer | null;
  isCompletionOfOffers: boolean;
  isActiveOfferStatus: boolean;
  isSuccessReviewAdded: boolean;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
