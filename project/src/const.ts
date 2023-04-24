export enum AppRoute {
  Login = '/login',
  NotFound = '/*',
  Root = '/',
  Property = '/offer/:id'
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Review = '/review',
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

export const BACKEND_URL = 'https://12.react.pages.academy/six-cities-simple';
export const REQUEST_TIMEOUT = 5000;

export const TIMEOUT_SHOW_ERROR = 2000;

export const CITY_NAMES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf',];

export const MIN_SYMBOL_COMMENT = 50;
export const MAX_SYMBOL_COMMENT = 300;

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const AUTH_TOKEN_KEY_NAME = 'six-cities-simple-12';

export const getPlaceRating = (rating: number): number => Math.round(rating) * 100 / 5;
