import axios from 'axios';
import { appContext } from '~/configs/appContext';

export const API = axios.create({
  baseURL: appContext.api,
  headers: {
    marketplaceId: '5',
  },
});
