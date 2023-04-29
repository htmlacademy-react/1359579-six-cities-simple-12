import { store } from '../store/index';
import { AuthorizationStatus, RequestStatus } from '../const';
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
  activeOffer: Offer | null;
  reviews: Reviews;
  activeOffersNearby: Offers;
  isCompletionOfOffers: boolean;
  isActiveOfferStatus: boolean;
  isSuccessReviewAdded: RequestStatus;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
