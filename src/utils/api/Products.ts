import { API } from './API';
import { IProduct } from '~/utils/interfaces';

export const getProductDetails = async (
  productId: string
): Promise<IProduct | undefined> => {
  try {
    const { data } = await API.get<IProduct>(`/products/${productId}`, {
      headers: {
        marketplaceId: '5',
      },
      params: {
        storeId: 5,
      },
    });
    return data;
  } catch (error) {
    console.log('Error no request de getProductDetails');
  }
};
