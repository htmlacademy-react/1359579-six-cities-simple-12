import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offers } from '../types/offer';
import { fillOffers, setOffersStatus} from './action';
import { APIRoute } from '../const';

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
