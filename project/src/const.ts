export enum AppRoute {
  Login = '/login',
  NotFound = '*',
  Root = '/',
  Property = '/offer/:id',
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Review = 'review',
}

export enum NameSpace {
  Data = 'DATA',
  User = 'USER',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum OfferCardLocation {
  cities = 'cities',
  nearPlaces = 'nearPlaces',
}

export enum PropertyMapLocation {
  cities = 'cities',
  property = 'property',
}

export enum LocationItem {
  login = 'login',
  cities = 'cities',
}

export const REQUEST_TIMEOUT = 5000;
export const IMAGE_COUNT = 6;
export const MIN_RATING = 0;
export const MAX_RATING = 5;
export const MIN_SYMBOL_COMMENT = 50;
export const MAX_SYMBOL_COMMENT = 300;
export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_CURRENT = 'img/pin-active.svg';
export const AUTH_TOKEN_KEY_NAME = 'six-cities-simple-12';
export const BACKEND_URL = 'https://12.react.pages.academy/six-cities-simple';
export const CITY_NAMES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf',];
export const getPlaceRating = (rating: number): number => Math.round(rating) * 100 / 5;
