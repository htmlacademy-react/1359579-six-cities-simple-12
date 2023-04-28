import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../const';

const Action = {
  ROUTE_REDIRECTION: 'ROUTE_REDIRECTION',
};

export const routeRedirection = createAction<AppRoute>(Action.ROUTE_REDIRECTION);
