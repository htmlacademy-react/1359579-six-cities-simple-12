import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offers, Offer } from '../types/offer';
import {
  fullOffers,
  fullOfferActive,
  fullOffersNearbyActive,
  setOffersFullStatus,
  setActiveOfferFullStatus,
  setError,
  authRequired,
  updateUser,
  routeRedirection,
  newReviewOffer,
  reviewsOffer,
} from './action';
import { AppRoute, APIRoute, TIMEOUT_SHOW_ERROR, AuthorizationStatus } from '../const';
import { store } from './';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { ReviewData } from '../types/review-data';
import { Reviews } from '../types/review';
import { saveToken, dropToken } from '../services/token';

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
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

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/logout',
  async(_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(updateUser(null));
    dispatch(authRequired(AuthorizationStatus.NoAuth));
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
    dispatch(setOffersFullStatus(true));
    const {data} = await api.get<Offers>(APIRoute.Offers);
    dispatch(setOffersFullStatus(false));
    dispatch(fullOffers(data));
  }
);

export const fetchOfferActiveAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchOfferActive',
  async(id, {dispatch, extra: api}) => {
    try {
      dispatch(setActiveOfferFullStatus(true));
      const {data} = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
      dispatch(setActiveOfferFullStatus(false));
      dispatch(fullOfferActive(data));
    } catch {
      dispatch(routeRedirection(AppRoute.NotFound));
    }
  }
);

export const fetchOffersNearbyActiveAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchOffersNearby',
  async(id, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(`${APIRoute.Offers}/${id}/nearby`);
    dispatch(fullOffersNearbyActive(data));
  }
);

export const fetchAddNewReview = createAsyncThunk<void, ReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'review/fetchAddNewReview',
  async({id, review}, {dispatch, extra: api}) => {
    const {data} = await api.post<ReviewData>(`${APIRoute.Review}/${id}`, review);
    dispatch(newReviewOffer(data));
  }
);

export const fetchReviewsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'reviews/fetchReviews',
  async(id, {dispatch, extra: api}) => {
    const {data} = await api.get<Reviews>(`${APIRoute.Review}/${id}`);
    dispatch(reviewsOffer(data));
  }
);
