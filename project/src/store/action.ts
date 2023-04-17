import { createAction } from '@reduxjs/toolkit';
import { Offers } from '../types/offer';

const Action = {
  CITY_CHANGE : 'CITY_CHANGE',
  FILL_OFFERS : 'FILL_OFFERS',
  SET_OFFERS_STATUS : 'SET_OFFERS_STATUS',
};

const cityChange = createAction<string>(Action.CITY_CHANGE);
const fillOffers = createAction<Offers>(Action.FILL_OFFERS);
const setOffersStatus = createAction<boolean>(Action.SET_OFFERS_STATUS);

export {Action, cityChange, fillOffers, setOffersStatus};
