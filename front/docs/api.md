# Api service

We are using `axios` package to make all API requests.  
Find the official doc [here](https://www.npmjs.com/package/axios)

## Usage

1. Import the `api` service into your component:

```javascript
import api from '@/services/api';
```

2. Use the service like this.

```javascript
const signIn = async () => {
  const { data } = await api.post('/users/sign_in', { user });
};
```

## Service

Service can be found into `src/services/api.js`

### Base Configuration

The service starts by creating an Axios instance with a base URL derived from the project environment variables. It sets default headers for content type, accept type, and enables credentials for cross-origin requests.

### Interceptors

#### Response

The response interceptor is responsible for handling responses from API calls. It checks for the presence of an authorization header in the response. If found, it stores the token in local storage and converts response data to a specific case format.

- Status code `401`: Local storage and cookies will be flushed.
- Status code `403`: User will be redirected to the previous url.

#### Request

The request interceptor modifies outgoing requests by adding the Bearer token from local storage to the Authorization header. It also converts the request data to a specific case format before sending.
