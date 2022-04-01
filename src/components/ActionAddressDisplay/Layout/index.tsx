import * as React from 'react';

import { Wrapped, Conditional } from '~/components/Basics';

import { User } from './User';
import { Selectable } from './Selectable';
import { Store } from './Store';

import { IActionAddressDisplayLayout } from '~/components/ActionAddressDisplay/data';

export const ActionAddressDisplay = (props: IActionAddressDisplayLayout) => {
  const { variant = 'default', onPress } = props;
  return (
    <Wrapped {...{ onPress }} testID={`ActionAddressDisplay`}>
      <Conditional render={variant === 'default'}>
        <Selectable {...props} />
      </Conditional>
      <Conditional render={variant === 'user'}>
        <User {...props} />
      </Conditional>
      <Conditional render={variant === 'store'}>
        <Store {...props} />
      </Conditional>
    </Wrapped>
  );
};
