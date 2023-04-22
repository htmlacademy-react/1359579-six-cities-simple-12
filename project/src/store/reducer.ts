import { createReducer } from '@reduxjs/toolkit';
import { CITY_NAMES, AuthorizationStatus } from '../const';
import { cityChange, fillOffers, setOffersStatus, setError, authRequired, updateUser } from './action';
import { Offers } from '../types/offer';
import { UserData } from '../types/user-data';

type InitialStateType = {
  cityName: string;
  offers: Offers;
  isCompletionOfOffers: boolean;
  error: string | null;
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
}

const initialState : InitialStateType = {
  cityName: CITY_NAMES[0],
  offers: [],
  isCompletionOfOffers: false,
  error: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChange, (state, action) => {
      state.cityName = action.payload;
    })

    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload;
    })

    .addCase(setOffersStatus, (state, action) => {
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

