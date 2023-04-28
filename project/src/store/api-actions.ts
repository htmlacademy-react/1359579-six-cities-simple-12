import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offers, Offer } from '../types/offer';
import { routeRedirection } from './action';
import { AppRoute, APIRoute } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { ReviewData } from '../types/review-data';
import { Reviews } from '../types/review';
import { saveToken, dropToken } from '../services/token';
import { toast } from 'react-toastify';

export const CheckAuthorizationAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/checkAuth',
  async(_arg, { extra: api }) => {
    const {data} = await api.get<UserData>(APIRoute.Login);

    return data;
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/login',
  async({ login: email, password }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
      saveToken(data.token);
      dispatch(routeRedirection(AppRoute.Main));

      return data;
    }catch (error) {
      toast.error('Login failed');

      throw error;
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/logout',
  async(_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

export const fetchOffersAction = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Offers>(APIRoute.Offers);

    return data;
  },
);

export const fetchOffersNearbyActiveAction = createAsyncThunk<Offers, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchOfferIdNearby',
  async(id, { extra: api }) => {
    const { data } = await api.get<Offers>(APIRoute.Offers.concat(`/${id}/nearby`));

    return data;
  },
);

export const fetchAddNewComment = createAsyncThunk<Reviews, ReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'comments/fetchAddNewComment',
  async({ id, review }, { extra: api, rejectWithValue}) => {
    try {
      const { data } = await api.post<Reviews>(`${ APIRoute.Comments }/${ id }`, review);

      return data;
    } catch (error) {
      toast.error('Ups! Failed to save review');

      return rejectWithValue(null);
    }
  }
);

export const fetchCommentsAction = createAsyncThunk<Reviews, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'comments/fetchComments',
  async(id, { extra: api }) => {
    const { data } = await api.get<Reviews>(`${ APIRoute.Comments }/${ id }`);

    return data;
  },
);

export const fetchOfferActiveAction = createAsyncThunk<Offer | null, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchActiveOffer',
  async(id, { dispatch, extra: api }) => {
    try {
      const {data} = await api.get<Offer>(`${ APIRoute.Offers }/${ id }`);
      dispatch(fetchCommentsAction(id));
      return data;

    } catch (error) {
      dispatch(routeRedirection(AppRoute.NotFound));

      return null;
    }
  },
);
