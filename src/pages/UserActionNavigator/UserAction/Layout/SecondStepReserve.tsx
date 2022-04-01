import * as React from 'react';
import moment from 'moment-with-locales-es6';

import {
  Text,
  Input,
  Wrapped,
  Calendar,
  Accordion,
  ItemPicker,
  HourSelector,
  ActionTypeDisplay,
  ActionAddressDisplay,
} from '~/components';

import { SelectPeriod } from './SelectPeriod';

import { IUserActionSecondStepWithdrawal } from '~/pages/UserActionNavigator/UserAction/data';
import S from './styles';

export const SecondStepReserve = ({
  t,
  date,
  obs,
  setObs,
  changeInfos,
  selectedHour,
  selectPeriod,
  accordionPress,
}: IUserActionSecondStepWithdrawal) => (
  <Wrapped mx={3}>
    <Wrapped mb={4}>
      <S.Title>{t('ACTION.OUTBACK.RESERVE.STEP_2.MAIN')}</S.Title>
    </Wrapped>
    <Wrapped mb={4}>
      <ActionTypeDisplay
        onPress={() => null}
        isSelected={true}
        type={'reserve'}
        variant="full"
      />
    </Wrapped>
    <Wrapped mb={4}>
      <Text mt={1} mb={4} variant="outback:h4">
        {t('ACTION.OUTBACK.RESERVE.STEP_2.REQUEST_BY')}
      </Text>
      <ActionAddressDisplay
        onPress={changeInfos}
        isSelected={false}
        variant="store"
      />
    </Wrapped>
    <Wrapped mb={4}>
      <Text mt={1} mb={4} variant="outback:h4">
        {t('ACTION.OUTBACK.RESERVE.STEP_2.BETTER_DAY')}
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
        {t('ACTION.OUTBACK.RESERVE.STEP_2.RESERVE_COUNT')}
      </Text>
      <ItemPicker strong type="person" numOfLines={2} />
      <Text mt={4} mb={4} variant="outback:h4">
        {t('ACTION.OUTBACK.RESERVE.STEP_2.AMBIENT')}
      </Text>
      <ItemPicker numOfLines={2} type="ambient" />
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
    <Wrapped>
      <Text
        mb={2}
        variant="outback:h4">{`Gostaria de deixar alguma observação? (opcional)`}</Text>
      <Wrapped height={90} bg="background" borderRadius="card" p={3} pb={0}>
        <Input
          value={obs}
          onChange={setObs}
          size="h6"
          font="regular"
          placeholder="Ex: Ponto da carne, maionese à parte, etc."
          bg="transparent"
          numberOfLines={4}
          maxLength={140}
        />
      </Wrapped>
    </Wrapped>
  </Wrapped>
);
