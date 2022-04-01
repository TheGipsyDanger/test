import { API } from './API';

export const getUser = async (token: string): Promise<any> => {
  try {
    const { data } = await API.get('/me', {
      headers: {
        marketplaceId: 'ffc67198-00cf-41b8-9792-005735d01a3f',
        Authorization: token,
      },
    });
    return data;
  } catch (error) {
    throw Error('Service unavalable');
  }
};
