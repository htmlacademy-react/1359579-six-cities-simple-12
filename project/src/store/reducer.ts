import { createReducer } from '@reduxjs/toolkit';
import { CITY_NAMES, AuthorizationStatus } from '../const';
import {
  cityChange,
  fullOffers,
  setOffersFullStatus,
  setError,
  authRequired,
  updateUser,
  fullOfferActive,
  fullOffersNearbyActive,
  setActiveOfferFullStatus,
} from './action';
import { Offers, Offer } from '../types/offer';
import { UserData } from '../types/user-data';

type InitialStateType = {
  cityName: string;
  offers: Offers;
  isCompletionOfOffers: boolean;
  error: string | null;
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
  activeOffer: Offer | null;
  activeOffersNearby: Offers;
  isActiveOfferStatus: boolean;
}

const initialState : InitialStateType = {
  cityName: CITY_NAMES[0],
  offers: [],
  isCompletionOfOffers: false,
  error: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
  activeOffer: null,
  activeOffersNearby: [],
  isActiveOfferStatus: true,
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

    .addCase(authRequired, (state, action) => {
      state.authorizationStatus = action.payload;
    })

    .addCase(updateUser, (state, action) => {
      state.userData = action.payload;
    });
});

