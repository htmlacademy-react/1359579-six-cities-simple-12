export enum AppRoute {
  Login = '/login',
  NotFound = '/*',
  Root = '/',
  Property = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const MIN_SYMBOL_COMMENT = 50;
export const MAX_SYMBOL_COMMENT = 300;
