import * as React from 'react';
import { ScrollView } from 'react-native';

import { Wrapped, List, PromotionalSlider } from '~/components';
import { Header } from './Header';
import { SubHeader } from './SubHeader';

import { IHomeLayout } from '~/pages/Home/data';

const data = [{}, {}, {}, {}, {}];

export const Home = ({ data }: IHomeLayout) => (
  <Wrapped flex={1}>
    <Header />
    <ScrollView showsVerticalScrollIndicator={false}>
      <SubHeader />
      <PromotionalSlider radius={25} />
      <Wrapped
        px={2}
        pt={2}
        mt={-2}
        bg="background"
        borderTopLeftRadius="fullImageList"
        borderTopRightRadius="fullImageList">
        <List data={data} title="Cardápio" variant="menu" />
        <List data={data} title="Mais vendidos" variant="bestSellers" />
        <List data={data} title="Promoções" variant="promotions" />
        <List data={data} title="Mais Outback" variant="more" direction="y" />
      </Wrapped>
    </ScrollView>
  </Wrapped>
);
