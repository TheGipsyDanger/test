import * as React from 'react';

import {
  Text,
  Wrapped,
  Spacing,
  ActionTypeDisplay,
  ActionAddressDisplay,
} from '~/components';

import { IUserActionSecondStepWithdrawal } from '~/pages/UserActionNavigator/UserAction/data';
import S from './styles';

export const ThirdStepWithdrawal = ({
  t,
  changeInfos,
}: IUserActionSecondStepWithdrawal) => {
  return (
    <Wrapped mx={3}>
      <Wrapped mb={4}>
        <S.Title>{t('ACTION.OUTBACK.WITHDRAWAL.STEP_3.MAIN')}</S.Title>
      </Wrapped>
      <Wrapped mb={4}>
        <ActionTypeDisplay
          onPress={() => null}
          isSelected={true}
          type={'withdrawal'}
          variant="full"
        />
      </Wrapped>
      <Spacing space={3}>
        <Text mt={1} variant="outback:h4">
          {t('ACTION.OUTBACK.WITHDRAWAL.STEP_3.REQUEST_BY')}
        </Text>
        <ActionAddressDisplay
          onPress={changeInfos}
          isSelected={false}
          variant="store"
        />
        <Wrapped
          height={66}
          borderRadius="card"
          bg="background"
          justifyContent="space-around"
          variant="outback:row:center">
          <Text variant="outback:h5">
            {t('ACTION.OUTBACK.WITHDRAWAL.STEP_3.DATE')}
          </Text>
          <Text variant="outback:h2">Hoje, 05 de Setembro 2021</Text>
        </Wrapped>
        <Wrapped
          height={66}
          borderRadius="card"
          bg="background"
          justifyContent="space-around"
          variant="outback:row:center">
          <Text variant="outback:h5">
            {t('ACTION.OUTBACK.WITHDRAWAL.STEP_3.HOUR')}
          </Text>
          <Text variant="outback:h2">Entre 13:00 - 13:30</Text>
        </Wrapped>
        <Wrapped onPress={changeInfos}>
          <Text
            mt={3}
            mb={3}
            variant="outback:h8"
            textAlign="center"
            color="primary">
            {t('ACTION.OUTBACK.WITHDRAWAL.STEP_3.CHANGE')}
          </Text>
        </Wrapped>
      </Spacing>
    </Wrapped>
  );
};
