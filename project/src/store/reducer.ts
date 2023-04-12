import { createReducer } from '@reduxjs/toolkit';
import { CITY_NAMES } from '../const';
import { cityChange, fillOffers } from './action';
import { offers } from '../mocks/offers';
import { Offers } from '../types/offer';

const initialState = {
  cityName: CITY_NAMES[0],
  offers: offers as Offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChange, (state, action) => {
      state.cityName = action.payload;
    })

    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload.offers;
    });
});

export {reducer};
