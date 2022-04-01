import * as React from 'react';
import { Switch } from 'react-native';

import { Text, Wrapped, ItemPicker, Input as InputBase } from '~/components';

import { Input } from './Input';
import { Address } from './Address';

import { IUserActionSecondStepQueue } from '~/pages/UserActionNavigator/UserAction/data';

export const SecondStepQueue = (props: IUserActionSecondStepQueue) => {
  const { t, id, setId, toggle, setToggle, user } = props;
  return (
    <Wrapped>
      <Wrapped mx={3}>
        <Wrapped mb={4}>
          <Text mt={1} mb={4} variant="outback:h4">
            {t('ACTION.OUTBACK.QUEUE.STEP_1.ID')}
          </Text>
          {user?.name ? (
            <Text variant="outback:h8">{user.name}</Text>
          ) : (
            <InputBase
              px={2}
              value={id}
              onChange={setId}
              mask={'999.999.999-99'}
              borderRadius="button"
              size="h5"
              font="regular"
              placeholder="Ex: xxx.xxx.xxx-xx"
              height={40}
              bg="background"
            />
          )}
        </Wrapped>
        <Wrapped mb={4}>
          <Text mt={1} mb={4} variant="outback:h4">
            {t('ACTION.OUTBACK.QUEUE.STEP_1.REQUEST_ADDRESS')}
          </Text>
          <Input {...props} />
        </Wrapped>
        <Wrapped mb={4}>
          <Text mt={1} mb={4} variant="outback:h4">
            {t('ACTION.OUTBACK.QUEUE.STEP_1.RESERVE_COUNT')}
          </Text>
          <ItemPicker strong type="person" />
        </Wrapped>
        <Wrapped
          flexDirection="row"
          flex={1}
          justifyContent="space-between"
          mb={4}
          alignItems="center">
          <Text mt={1} mb={4} variant="outback:h4">
            {t('ACTION.OUTBACK.QUEUE.STEP_1.TOGGLE_MAIN')}
            <Text variant="outback:tabBar">
              {t('ACTION.OUTBACK.QUEUE.STEP_1.TOGGLE_SECOND')}
            </Text>
          </Text>
          <Switch
            trackColor={{ false: '#e0e6ed', true: '#A00F2D' }}
            ios_backgroundColor="#e0e6ed"
            onValueChange={setToggle}
            value={toggle}
          />
        </Wrapped>
      </Wrapped>
      <Address {...props} />
    </Wrapped>
  );
};
