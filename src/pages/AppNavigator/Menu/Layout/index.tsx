import * as React from 'react';
import { ScrollView } from 'react-native';

import { Wrapped, List, PromotionalSlider, Conditional } from '~/components';
import { Header } from './Header';
import { SubHeader } from './SubHeader';

import { IMenuLayout } from '~/pages/AppNavigator/Menu/data';
import { DetailsMenu } from '~/components/List/Layout/DetailsMenu';

export const Menu = ({
  user,
  data,
  categories,
  hasCategory,
  openDetails,
  menuCategory,
  addItemOnCart,
  defineCategory,
  selectedCategory,
  press,
}: IMenuLayout) => {
  return (
    <Wrapped flex={1}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SubHeader {...{ user, press }} />
        <PromotionalSlider radius={25} />
        <Wrapped
          mt={-2}
          bg="background"
          borderTopLeftRadius="fullImageList"
          borderTopRightRadius="fullImageList">
          <List
            onPress={defineCategory}
            data={categories}
            title="Cardápio"
            variant="menu"
          />
          <Conditional render={hasCategory}>
            <Wrapped>
              <List data={data} title="Mais vendidos" variant="bestSellers" />
              <List data={data} title="Promoções" variant="promotions" />
              <List
                data={data}
                title="Mais Outback"
                variant="more"
                direction="y"
              />
            </Wrapped>
            <Wrapped>
              <DetailsMenu
                {...{
                  name: selectedCategory.name,
                  description: selectedCategory.description,
                }}
              />
              {menuCategory.map((menu) => (
                <List
                  onPress={openDetails}
                  onPressTwo={addItemOnCart}
                  data={menu.products}
                  title={menu.name}
                  variant="menuCategory"
                  direction="y"
                />
              ))}
            </Wrapped>
          </Conditional>
        </Wrapped>
      </ScrollView>
    </Wrapped>
  );
};
