import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OfferProcess } from '../../types/state';
import { NameSpace, CITY_NAMES, RequestStatus } from '../../const';
import {
  fetchOffersAction,
  fetchOfferActiveAction,
  fetchOffersNearbyActiveAction,
  fetchAddNewComment,
  fetchCommentsAction,
} from '../api-actions';

const initialState: OfferProcess = {
  cityName: CITY_NAMES[0],
  offers: [],
  reviews: [],
  activeOffersNearby: [],
  activeOffer: null,
  isCompletionOfOffers: false,
  isActiveOfferStatus: false,
  isSuccessReviewAdded: RequestStatus.Unknow,
};

export const offerProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    cityChange: (state, action: PayloadAction<string>) => {
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
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(fetchAddNewComment.pending, (state) => {
        state.isSuccessReviewAdded = RequestStatus.Pending;
      })
      .addCase(fetchAddNewComment.fulfilled, (state) => {
        state.isSuccessReviewAdded = RequestStatus.Success;
      })
      .addCase(fetchAddNewComment.rejected, (state) => {
        state.isSuccessReviewAdded = RequestStatus.Failure;
      });
  }
});

export const { cityChange } = offerProcess.actions;
