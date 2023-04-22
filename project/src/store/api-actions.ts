import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offers } from '../types/offer';
import { fillOffers, setOffersStatus, setError, authRequired, updateUser, routeRedirection} from './action';
import { AppRoute, APIRoute, TIMEOUT_SHOW_ERROR, AuthorizationStatus } from '../const';
import {store} from './';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { saveToken } from '../services/token';

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

export const CheckAuthorizationAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/checkAuth',
  async(_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(authRequired(AuthorizationStatus.Auth));
    } catch {
      dispatch(authRequired(AuthorizationStatus.NoAuth));
    }
  },
);


export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/login',
  async({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email,password});
    saveToken(data.token);
    dispatch(updateUser(data));
    dispatch(authRequired(AuthorizationStatus.Auth));
    dispatch(routeRedirection(AppRoute.Root));
  },
);
