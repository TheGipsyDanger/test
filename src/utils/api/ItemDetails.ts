import { API } from './API';
import { IitemDetails } from '~/utils/interfaces';

export const getItemDetails = async (): Promise<any> => {
  try {
    const { data } = await API.get<IitemDetails>('/categories/5');
    return data;
  } catch (error) {
    console.log('Error no request de getItemDetails');
  }
};
