import * as React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigation } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';

import { Loading } from '~/components';
import {
  useCart,
  useUser,
  useModal,
  useCategories,
  useItemDetails,
} from '~/context';
import {
  IProduct,
  ICategory,
  getCategories,
  IMenuCategory,
  getMenuCategory,
  isEmptyFunctions,
  getProductDetails,
} from '~/utils';

import { IMenu } from '~/pages/AppNavigator/Menu/data';
import { Menu as Layout } from './Layout';

export const Menu = (props: IMenu) => {
  const { user, isInitUser } = useUser();
  const { isEmptyObject } = isEmptyFunctions();
  const { selectedCategory, setSelectedCategory } = useCategories();
  const { setCurrentItem } = useItemDetails();
  const { openModal, closeModal } = useModal();
  const { addItem } = useCart();

  const { navigate } = useNavigation();

  const [menuCategory, setMenuCategory] = useState<IMenuCategory[]>([]);

  const { isLoading, data: categories } = useQuery(
    'getCategories',
    getCategories
  );

  async function defineCategory(category: ICategory) {
    const alreadySelected = selectedCategory.name === category.name;
    setSelectedCategory(alreadySelected ? ({} as ICategory) : category);
    try {
      const data = await getMenuCategory(category.id);
      setMenuCategory(data);
    } catch (error) {}
  }

  async function openDetails(productId: string) {
    openModal('Loading');
    try {
      const data = await getProductDetails(productId);
      if (data)
        setCurrentItem({
          ...data,
          // Isso vai morrer quando o back mandar a descrição
          description:
            'Alface, brócolis, cenroura, carne, cebolinha, agrião, cebolas em tiras',
        });
      openModal('ItemDetaislModal');
    } catch (error) {
      closeModal();
    }
  }

  function addItemOnCart(item: IProduct) {
    addItem(item);
  }

  function checkIsEmpty() {
    return isEmptyObject(selectedCategory);
  }

  async function openURL() {
    await WebBrowser.openBrowserAsync(
      'https://outback.todocartoes.com.br/#/purchase'
    );
  }

  function press(type: string) {
    const options: any = {
      'Gift card': () => openURL(),
      Fidelidade: () => navigate('UserActionNavigator'),
      'Entrar na fila': () => navigate('UserActionQueueNavigator'),
    };

    options[type]();
  }

  const layoutProps = {
    ...props,
    user,
    press,
    categories,
    openDetails,
    menuCategory,
    addItemOnCart,
    defineCategory,
    selectedCategory,
    hasCategory: checkIsEmpty(),
    data: [{}, {}, {}, {}, {}],
  };

  if (isLoading && !isInitUser) return <Loading />;

  return <Layout {...layoutProps} />;
};
