import * as React from 'react';

import {
  Text,
  Wrapped,
  ActionTypeDisplay,
  ActionAddressDisplay,
} from '~/components';

import { IUserActionSecondStepDelivery } from '~/pages/UserActionNavigator/UserAction/data';
import S from './styles';

export const SecondStepDelivery = ({
  t,
  changeInfos,
  changeAddress,
  changeLocation,
}: IUserActionSecondStepDelivery) => (
  <Wrapped mx={3}>
    <Wrapped mb={4}>
      <S.Title>{t('ACTION.OUTBACK.DELIVERY.STEP_2.MAIN')}</S.Title>
    </Wrapped>
    <Wrapped mb={4}>
      <ActionTypeDisplay
        onPress={() => null}
        isSelected={true}
        type={'delivery'}
        variant="full"
      />
    </Wrapped>
    <Wrapped mb={4}>
      <ActionAddressDisplay
        onPress={changeInfos}
        isSelected={true}
        variant="user"
      />
    </Wrapped>
    <Wrapped mb={4}>
      <Text mt={1} mb={4} variant="outback:h4">
        {t('ACTION.OUTBACK.DELIVERY.STEP_2.REQUEST_BY')}
      </Text>
      <ActionAddressDisplay
        onPress={changeInfos}
        isSelected={false}
        variant="store"
      />
    </Wrapped>
    <Wrapped onPress={changeInfos}>
      <Text mb={4} variant="outback:h8" textAlign="center" color="primary">
        {t('ACTION.OUTBACK.DELIVERY.STEP_2.CHANGE')}
      </Text>
    </Wrapped>
  </Wrapped>
);
