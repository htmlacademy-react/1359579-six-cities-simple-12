import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OfferProcess } from '../../types/state';
import { NameSpace, CITY_NAMES } from '../../const';
import { fetchOffersAction, fetchOfferActiveAction, fetchOffersNearbyActiveAction, fetchAddNewReview, fetchReviewsAction,
} from '../api-actions';

const initialState: OfferProcess = {
  cityName: CITY_NAMES[0],
  offers: [],
  reviews: [],
  activeOffersNearby: [],
  activeOffer: null,
  isCompletionOfOffers: false,
  isActiveOfferStatus: false,
  isSuccessReviewAdded: false,
};

export const offerProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.cityName = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isCompletionOfOffers = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isCompletionOfOffers = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isCompletionOfOffers = true;
      })

      .addCase(fetchOfferActiveAction.pending, (state) => {
        state.isActiveOfferStatus = false;
      })
      .addCase(fetchOfferActiveAction.fulfilled, (state, action) => {
        state.activeOffer = action.payload;
        state.isActiveOfferStatus = true;
      })
      .addCase(fetchOfferActiveAction.rejected, (state) => {
        state.isActiveOfferStatus = true;
      })

      .addCase(fetchOffersNearbyActiveAction.pending, (state) => {
        state.isCompletionOfOffers = false;
      })
      .addCase(fetchOffersNearbyActiveAction.fulfilled, (state, action) => {
        state.activeOffersNearby = action.payload;
      })

      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })

      .addCase(fetchAddNewReview.pending, (state) => {
        state.isSuccessReviewAdded = false;
      })
      .addCase(fetchAddNewReview.fulfilled, (state) => {
        state.isSuccessReviewAdded = true;
      })
      .addCase(fetchAddNewReview.rejected, (state) => {
        state.isSuccessReviewAdded = false;
      });
  }
});

export const { changeCity } = offerProcess.actions;
