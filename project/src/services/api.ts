import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import {getToken} from './token';
import {BACKEND_URL, REQUEST_TIMEOUT} from '../const';
import { StatusCodes } from 'http-status-codes';
import { processErrorHandle } from './process-error-handle';

const StatusCodeDisplay: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.NOT_FOUND]: true,
};

const displayError = (response: AxiosResponse) => !!StatusCodeDisplay[response.status];

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }
      return config;
    },
  );


  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError <{error: string}>) => {
      if (error.response && displayError(error.response)) {
        processErrorHandle(error.response.data.error);
      }
    }
  );

  return api;
};
