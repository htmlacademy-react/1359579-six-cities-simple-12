import { createAction } from '@reduxjs/toolkit';
import { Offers } from '../types/offer';

const Action = {
  CITY_CHANGE : 'CITY_CHANGE',
  FILL_OFFERS : 'FILL_OFFERS',
};

const cityChange = createAction<string>(Action.CITY_CHANGE);
const fillOffers = createAction<{offers: Offers}>(Action.FILL_OFFERS);


export {Action, cityChange, fillOffers};
