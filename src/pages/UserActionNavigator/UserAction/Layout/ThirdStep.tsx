import * as React from 'react';
import { FlatList } from 'react-native';

import { Wrapped, Conditional } from '~/components';
import { ThirdStepReserve } from './ThirdStepReserve';
import { ThirdStepWithdrawal } from './ThirdStepWithdrawal';

import { IUserActionSecondStep } from '~/pages/UserActionNavigator/UserAction/data';

export const ThirdStep = (props: IUserActionSecondStep) => {
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
          <Conditional render={selectType === 'reserve'}>
            <ThirdStepReserve {...props} />
          </Conditional>
          <Conditional render={selectType === 'withdrawal'}>
            <ThirdStepWithdrawal {...props} />
          </Conditional>
        </Wrapped>
      )}
    />
  );
};
