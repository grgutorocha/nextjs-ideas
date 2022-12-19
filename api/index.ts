import axios from 'axios';

import { BASE_URL, API_ENDPOINT } from './endpoints';

export const api = axios.create({
  baseURL: `${BASE_URL}${API_ENDPOINT}`,
});
