import { createAction } from '@reduxjs/toolkit';
import { Offers } from '../types/offer';
import { AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';

const Action = {
  CITY_CHANGE : 'CITY_CHANGE',
  FILL_OFFERS : 'FILL_OFFERS',
  SET_OFFERS_STATUS : 'SET_OFFERS_STATUS',
  SET_ERROR: 'SET_ERROR',
  AUTH_REQUIRED: 'AUTH_REQUIRED',
  UPDATE_USER: 'UPDATE_USER',
};

export const cityChange = createAction<string>(Action.CITY_CHANGE);
export const fillOffers = createAction<Offers>(Action.FILL_OFFERS);
export const setOffersStatus = createAction<boolean>(Action.SET_OFFERS_STATUS);
export const setError = createAction<string | null>(Action.SET_ERROR);
export const authRequired = createAction<AuthorizationStatus>(Action.AUTH_REQUIRED);
export const updateUser = createAction<UserData | null>(Action.UPDATE_USER);
