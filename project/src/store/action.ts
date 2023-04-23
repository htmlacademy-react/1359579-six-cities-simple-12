import { createAction } from '@reduxjs/toolkit';
import { Offers, Offer } from '../types/offer';
import { AuthorizationStatus, AppRoute } from '../const';
import { UserData } from '../types/user-data';

const Action = {
  CITY_CHANGE: 'CITY_CHANGE',
  FULL_OFFERS: 'FULL_OFFERS',
  FULL_OFFER_ACTIVE: 'FULL_OFFER_ACTIVE', //1
  FULL_OFFERS_NEARBY_ACTIVE: 'FULL_OFFERS_NEARBY_ACTIVE', //2
  SET_OFFERS_FULL_STATUS: 'SET_OFFERS_STATUS',
  SET_ACTIVE_OFFER_FULL_STATUS: 'SET_OFFER_ACTIVE_FULL_STATUS', //3
  SET_ERROR: 'SET_ERROR',
  AUTH_REQUIRED: 'AUTH_REQUIRED',
  UPDATE_USER: 'UPDATE_USER',
  ROUTE_REDIRECTION: 'ROUTE_REDIRECTION',
};

export const cityChange = createAction<string>(Action.CITY_CHANGE);

export const fullOffers = createAction<Offers>(Action.FULL_OFFERS);

export const fullOfferActive = createAction<Offer>(Action.FULL_OFFER_ACTIVE); //+

export const fullOffersNearbyActive = createAction<Offers>(Action.FULL_OFFERS_NEARBY_ACTIVE); //+

export const setOffersFullStatus = createAction<boolean>(Action.SET_OFFERS_FULL_STATUS);

export const setActiveOfferFullStatus = createAction<boolean>(Action.SET_ACTIVE_OFFER_FULL_STATUS); //+

export const setError = createAction<string | null>(Action.SET_ERROR);

export const authRequired = createAction<AuthorizationStatus>(Action.AUTH_REQUIRED);

export const updateUser = createAction<UserData | null>(Action.UPDATE_USER);

export const routeRedirection = createAction<AppRoute>(Action.ROUTE_REDIRECTION);
