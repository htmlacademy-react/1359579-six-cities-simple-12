import { createReducer } from '@reduxjs/toolkit';
import { CITY_NAMES, AuthorizationStatus } from '../const';
import {
  cityChange,
  fullOffers,
  fullOfferActive,
  fullOffersNearbyActive,
  setOffersFullStatus,
  setActiveOfferFullStatus,
  setError,
  authRequired,
  updateUser,
  newReviewOffer,
  reviewsOffer,
} from './action';
import { Offers, Offer } from '../types/offer';
import { UserData } from '../types/user-data';
import { Reviews } from '../types/review';
import { ReviewData } from '../types/review-data';

type InitialStateType = {
  cityName: string;
  offers: Offers;
  activeOffer: Offer | null;
  activeOffersNearby: Offers;
  isCompletionOfOffers: boolean;
  isActiveOfferStatus: boolean;
  error: string | null;
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
  newReview: ReviewData | null;
  reviews: Reviews;
}

const initialState : InitialStateType = {
  cityName: CITY_NAMES[0],
  offers: [],
  activeOffer: null,
  activeOffersNearby: [],
  isCompletionOfOffers: false,
  isActiveOfferStatus: false,
  error: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
  newReview: null,
  reviews: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChange, (state, action) => {
      state.cityName = action.payload;
    })

    .addCase(fullOffers, (state, action) => {
      state.offers = action.payload;
    })

    .addCase(fullOfferActive, (state, action) => {
      state.activeOffer = action.payload;
    })

    .addCase(fullOffersNearbyActive, (state, action) => {
      state.activeOffersNearby = action.payload;
    })

    .addCase(setActiveOfferFullStatus, (state, action) => {
      state.isActiveOfferStatus = action.payload;
    })

    .addCase(setOffersFullStatus, (state, action) => {
      state.isCompletionOfOffers = action.payload;
    })

    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })

    .addCase(updateUser, (state, action) => {
      state.userData = action.payload;
    })

    .addCase(newReviewOffer, (state, action) => {
      state.newReview = action.payload;
    })

    .addCase(reviewsOffer, (state, action) => {
      state.reviews = action.payload;
    })

    .addCase(authRequired, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

