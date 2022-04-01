import * as React from 'react';
import moment from 'moment-with-locales-es6';

import {
  Text,
  Wrapped,
  Calendar,
  Accordion,
  HourSelector,
  ActionTypeDisplay,
  ActionAddressDisplay,
} from '~/components';

import { SelectPeriod } from './SelectPeriod';

import { IUserActionSecondStepWithdrawal } from '~/pages/UserActionNavigator/UserAction/data';
import S from './styles';

export const SecondStepWithdrawal = ({
  t,
  date,
  changeInfos,
  selectPeriod,
  selectedHour,
  accordionPress,
}: IUserActionSecondStepWithdrawal) => {
  return (
    <Wrapped mx={3}>
      <Wrapped mb={4}>
        <S.Title>{t('ACTION.OUTBACK.WITHDRAWAL.STEP_2.MAIN')}</S.Title>
      </Wrapped>
      <Wrapped mb={4}>
        <ActionTypeDisplay
          onPress={() => null}
          isSelected={true}
          type={'withdrawal'}
          variant="full"
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
      <Wrapped mb={4}>
        <Text mt={1} mb={4} variant="outback:h4">
          {t('ACTION.OUTBACK.WITHDRAWAL.STEP_2.BETTER_DAY')}
        </Text>
        <Accordion
          id="date"
          onPress={accordionPress}
          header={
            <SelectPeriod
              text={
                Object.keys(date).length > 0
                  ? moment(Object.keys(date)[0])
                      .locale('pt-BR')
                      .format('DD [de] MMMM YYYY')
                  : t('ACTION.OUTBACK.WITHDRAWAL.STEP_2.SELECT_DAY')
              }
              isOpen={selectPeriod.date.isOpen}
            />
          }
          body={<Calendar />}
        />
      </Wrapped>
      <Wrapped mb={4}>
        <Text mt={1} mb={4} variant="outback:h4">
          {t('ACTION.OUTBACK.WITHDRAWAL.STEP_2.BETTER_HOUR')}
        </Text>
        <Accordion
          id="hour"
          onPress={accordionPress}
          header={
            <SelectPeriod
              text={
                selectedHour !== ''
                  ? selectedHour
                  : t('ACTION.OUTBACK.WITHDRAWAL.STEP_2.SELECT_HOUR')
              }
              isOpen={selectPeriod.hour.isOpen}
            />
          }
          body={<HourSelector />}
        />
      </Wrapped>
    </Wrapped>
  );
};
