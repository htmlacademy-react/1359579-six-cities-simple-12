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
