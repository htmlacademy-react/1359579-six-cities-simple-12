import { createReducer } from '@reduxjs/toolkit';
import { CITY_NAMES } from '../const';
import { cityChange, fillOffers, setOffersStatus } from './action';
import { Offers } from '../types/offer';

type InitialStateType = {
  cityName: string;
  offers: Offers;
  isCompletionOfOffers: boolean;
}

const initialState : InitialStateType = {
  cityName: CITY_NAMES[0],
  offers: [],
  isCompletionOfOffers: false,
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
    });
});

export {reducer};
