import { API } from './API';
import { ICategoryResp, IMenuCategory } from '~/utils/interfaces';

export const getCategories = async (): Promise<any> => {
  try {
    const {
      data: { categories },
    } = await API.get<ICategoryResp>('/categories');
    return categories;
  } catch (error) {
    console.log('Error no request de getCategories: ', error);
  }
};

export const getMenuCategory = async (id: string): Promise<any> => {
  try {
    const {
      data: { subCategories },
    } = await API.get<IMenuCategory>(`/categories/${id}`, {
      headers: {
        marketplaceId: '5',
      },
      params: {
        storeId: 5,
      },
    });
    return subCategories;
  } catch (error) {
    console.log('Error no request de getMenuCategory');
  }
};
