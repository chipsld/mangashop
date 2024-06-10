import axios from 'axios';
import { get } from 'svelte/store';
import { _ } from '@/translations/i18n';
import { deepCaseConverter, displayToast } from '@/helpers';
import { paths, push } from '@/router/routes';
import { logout } from '@/services/auth';
import { authToken } from '@/stores';

// Import our api url from env file
const baseURL = import.meta.env.VITE_APP_API_BASE_URL;

export const axiosInstance = axios.create({ baseURL: `${baseURL}/api/v1` });
axiosInstance.defaults.headers.common['Accept'] = 'application/json';
axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';
axiosInstance.defaults.withCredentials = true;

// Intercept response to store Bearer token in local storage
axiosInstance.interceptors.response.use(
  (response) => {
    if (response.headers.authorization) {
      storeToken(response.headers.authorization);
    }

    return { ...response, data: deepCaseConverter(response.data, true) };
  },
  (error) => {
    const errorStatus = error?.response?.status;

    switch (errorStatus) {
      case 401:
        // log out user, clear local storage and go to login page
        // TODO: if you set cookies, clear them here
        logout();
        localStorage.clear();
        push(paths.login.path);
        break;
      case 403:
        // go to previous page
        history.back();
        break;
    }

    if (errorStatus) displayErrorMessage(errorStatus);

    return Promise.reject(error);
  }
);

// Intercept request to add Bearer token to Authorization headers config
axiosInstance.interceptors.request.use(
  (request) => {
    const token = localStorage.getItem('authToken');

    if (token) {
      request.headers['Authorization'] = token;
    }

    request.data = deepCaseConverter(request.data, false);
    return request;
  },

  (error) => {
    return Promise.reject(error);
  }
);

// Store Bearer token in local storage
const storeToken = (token) => {
  authToken.set(token);
};

// Fetch error message related to status and display it on a toast
const displayErrorMessage = (errorStatus) => {
  const errorTranslation = get(_)(`errors.${errorStatus}`);
  displayToast(errorTranslation, 'error');
};

export default axiosInstance;
