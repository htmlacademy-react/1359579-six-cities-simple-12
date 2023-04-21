import { createReducer } from '@reduxjs/toolkit';
import { CITY_NAMES } from '../const';
import { cityChange, fillOffers, setOffersStatus, setError } from './action';
import { Offers } from '../types/offer';

type InitialStateType = {
  cityName: string;
  offers: Offers;
  isCompletionOfOffers: boolean;
  error: string | null;
}

const initialState : InitialStateType = {
  cityName: CITY_NAMES[0],
  offers: [],
  isCompletionOfOffers: false,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
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
    });
});

export {reducer};
