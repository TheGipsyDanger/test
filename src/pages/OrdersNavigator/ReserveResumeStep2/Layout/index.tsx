import * as React from 'react';
import { FlatList, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Wrapped, PromotionalSlider, Conditional } from '~/components';
import { Map } from './Map';
import { Infos } from './Infos';
import { InfoModal } from './InfoModal';

import { IcArrowLeft } from '~/assets/svg';

import { IReserveResumeStep2Layout } from '~/pages/OrdersNavigator/ReserveResumeStep2/data';
import S from './styles';

export const ReserveResumeStep2 = ({
  goBack,
  ...props
}: IReserveResumeStep2Layout) => {
  const topDistance = useSafeAreaInsets().top;
  return (
    <Wrapped flex={1}>
      <FlatList
        data={[{}]}
        extraData={[{}]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={() => (
          <Wrapped>
            <PromotionalSlider position="top" height={topDistance + 214} />
            <S.Card bg="modals" height={341}>
              <Map {...props} />
            </S.Card>
            <S.Card height={`100%`} bg="background">
              <Infos {...props} />
            </S.Card>
            <Wrapped
              position="absolute"
              top={Platform.OS === 'android' ? topDistance + 20 : topDistance}
              left={30}>
              <Wrapped
                onPress={goBack}
                hitSlop={{ top: 12, left: 12, bottom: 12, right: 12 }}>
                <IcArrowLeft color="modals" />
              </Wrapped>
            </Wrapped>
            <Conditional render={props.step !== 0}>
              <InfoModal {...props} />
            </Conditional>
          </Wrapped>
        )}
      />
    </Wrapped>
  );
};
