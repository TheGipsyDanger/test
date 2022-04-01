import * as React from 'react';
import { Switch } from 'react-native';
import { colors } from '~/styles/Theme';

import {
  Text,
  Input,
  Wrapped,
  ItemPicker,
  InputAddress,
  Conditional,
  UserActionAddress,
} from '~/components';

export const FirstStep = (props: any) => {
  const { t, id, setId, toggle, setToggle, user } = props;

  return (
    <Wrapped>
      <Wrapped mx={3}>
        <Wrapped mb={4}>
          <Conditional render={!user.hasOwnProperty('name')}>
            <Wrapped>
              <Text mt={1} mb={4} variant="outback:h4">
                {t('ACTION.OUTBACK.QUEUE.STEP_1.ID')}
              </Text>
              <Input
                px={2}
                value={id}
                onChange={setId}
                mask={'999.999.999-99'}
                borderRadius="button"
                size="h5"
                font="regular"
                placeholder="CPF"
                height={40}
                bg="background"
              />
            </Wrapped>
          </Conditional>
        </Wrapped>
        <Wrapped mb={4}>
          <Text mt={1} mb={4} variant="outback:h4">
            {t('ACTION.OUTBACK.QUEUE.STEP_1.REQUEST_ADDRESS')}
          </Text>
          <InputAddress {...props} />
        </Wrapped>
        <Wrapped mb={4}>
          <Text mt={1} mb={4} variant="outback:h4">
            {t('ACTION.OUTBACK.QUEUE.STEP_1.RESERVE_COUNT')}
          </Text>
          <ItemPicker strong numOfLines={2} type="person" />
        </Wrapped>
        <Conditional render={false}>
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
              trackColor={{
                false: colors['background'],
                true: colors['primary'],
              }}
              thumbColor={colors['white']}
              ios_backgroundColor={colors['background']}
              onValueChange={setToggle}
              value={toggle}
            />
          </Wrapped>
        </Conditional>
      </Wrapped>
      <UserActionAddress {...props} />
    </Wrapped>
  );
};
