import { API } from './API';
import { IMenu } from '~/utils/interfaces';

export const getMenu = async (): Promise<any> => {
  try {
    const { data } = await API.get<IMenu>('/menus');
    return data;
  } catch (error) {
    console.log('Error no request');
  }
};
