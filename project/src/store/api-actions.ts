import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offers } from '../types/offer';
import { fillOffers, setOffersStatus, setError} from './action';
import { APIRoute, TIMEOUT_SHOW_ERROR } from '../const';
import {store} from './';

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  }
);

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersStatus(true));
    const {data} = await api.get<Offers>(APIRoute.Offers);
    dispatch(setOffersStatus(false));
    dispatch(fillOffers(data));
  }
);
