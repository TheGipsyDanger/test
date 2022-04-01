import * as React from 'react';

import { Wrapped, Text } from '~/components/Basics';
import { IStringMap } from '~/utils';

import { ICardCarousselCard } from '~/components/CardCaroussel/data';

const colors: IStringMap = {
  express: 'blue',
  master: 'black',
  visa: 'purple',
};

export const Card = ({
  text,
  flag,
  principal,
  ...props
}: ICardCarousselCard) => (
  <Wrapped {...props} bg={colors[flag]} center testID={`Card`}>
    <Wrapped>
      <Text variant="outback:h8" color="modals" textAlign="center">
        {flag}
      </Text>
    </Wrapped>
    <Wrapped>
      <Text variant="outback:h8" color="modals" textAlign="center">
        {`Final `}
        <Text variant="outback:h8" color="modals">
          {text}
        </Text>
      </Text>
    </Wrapped>
  </Wrapped>
);
