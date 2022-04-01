import * as React from 'react';

import {
  Text,
  Wrapped,
  Spacing,
  ActionTypeDisplay,
  ActionAddressDisplay,
} from '~/components';

import { IUserActionThirdStepReceived } from '~/pages/UserActionNavigator/UserAction/data';
import S from './styles';

export const ThirdStepReserve = ({
  t,
  obs,
  ambient,
  personCount,
  selectedHour,
  changeInfos,
}: IUserActionThirdStepReceived) => {
  return (
    <Wrapped mx={3}>
      <Wrapped mb={4}>
        <S.Title>{t('ACTION.OUTBACK.RESERVE.STEP_3.MAIN')}</S.Title>
      </Wrapped>
      <Wrapped mb={4}>
        <ActionTypeDisplay
          onPress={() => null}
          isSelected={true}
          type={'reserve'}
          variant="full"
        />
      </Wrapped>
      <Spacing space={3}>
        <Text mt={1} variant="outback:h4">
          {t('ACTION.OUTBACK.RESERVE.STEP_3.REQUEST_BY')}
        </Text>
        <ActionAddressDisplay
          onPress={changeInfos}
          isSelected={false}
          variant="store"
        />
        <S.ResumeInfo>
          <S.InfoLabel>
            <Text variant="outback:h5">
              {t('ACTION.OUTBACK.RESERVE.STEP_3.DATE')}
            </Text>
          </S.InfoLabel>
          <S.InfoContent>
            <Text variant="outback:h2">Hoje, 05 de Setembro 2021</Text>
          </S.InfoContent>
        </S.ResumeInfo>
        <S.ResumeInfo>
          <S.InfoLabel>
            <Text variant="outback:h5">
              {t('ACTION.OUTBACK.RESERVE.STEP_3.RESERVE_COUNT')}
            </Text>
          </S.InfoLabel>
          <S.InfoContent>
            <Text variant="outback:h2">{personCount}</Text>
          </S.InfoContent>
        </S.ResumeInfo>
        <S.ResumeInfo>
          <S.InfoLabel>
            <Text variant="outback:h5">
              {t('ACTION.OUTBACK.RESERVE.STEP_3.AMBIENT')}
            </Text>
          </S.InfoLabel>
          <S.InfoContent>
            <Text variant="outback:h2">{ambient}</Text>
          </S.InfoContent>
        </S.ResumeInfo>
        <Wrapped>
          <S.ResumeInfo>
            <S.InfoLabel>
              <Text variant="outback:h5">
                {t('ACTION.OUTBACK.RESERVE.STEP_3.HOUR')}
              </Text>
            </S.InfoLabel>
            <S.InfoContent>
              <Text variant="outback:h2">{selectedHour}</Text>
            </S.InfoContent>
          </S.ResumeInfo>
          <Text mt={1} variant="outback:body" textAlign="center">
            {t('ACTION.OUTBACK.RESERVE.STEP_3.HOUR_ALERT')}
          </Text>
        </Wrapped>
        <Wrapped>
          <S.ResumeInfoObs>
            <S.InfoLabel>
              <Text variant="outback:h5">
                {t('ACTION.OUTBACK.RESERVE.STEP_3.OBS')}
              </Text>
            </S.InfoLabel>
            <S.InfoContent>
              <Text variant="outback:h2">{obs}</Text>
            </S.InfoContent>
          </S.ResumeInfoObs>
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
