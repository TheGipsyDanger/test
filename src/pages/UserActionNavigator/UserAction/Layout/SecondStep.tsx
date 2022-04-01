import * as React from 'react';
import { FlatList } from 'react-native';

import { Wrapped, Conditional } from '~/components';

import { SecondStepDelivery } from './SecondStepDelivery';
import { SecondStepWithdrawal } from './SecondStepWithdrawal';
import { SecondStepReserve } from './SecondStepReserve';
import { SecondStepQueue } from './SecondStepQueue';

import { IUserActionSecondStep } from '~/pages/UserActionNavigator/UserAction/data';

export const SecondStep = (props: IUserActionSecondStep) => {
  const { selectType } = props;
  return (
    <FlatList
      data={[{}]}
      extraData={[{}]}
      keyExtractor={() => '1'}
      ListHeaderComponent={() => <Wrapped mt={2} />}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      renderItem={() => (
        <Wrapped>
          <Conditional render={selectType === 'delivery'}>
            <SecondStepDelivery {...props} />
          </Conditional>
          <Conditional render={selectType === 'withdrawal'}>
            <SecondStepWithdrawal {...props} />
          </Conditional>
          <Conditional render={selectType === 'reserve'}>
            <SecondStepReserve {...props} />
          </Conditional>
          <Conditional render={selectType === 'queue'}>
            <SecondStepQueue {...props} />
          </Conditional>
        </Wrapped>
      )}
    />
  );
};
