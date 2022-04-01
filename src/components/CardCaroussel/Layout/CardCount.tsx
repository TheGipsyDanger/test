import * as React from 'react';

import { Wrapped, Text } from '~/components/Basics';
import { ICardCarousselCardCount } from '~/components/CardCaroussel/data';

const countProps = {
  width: 6,
  height: 6,
  borderRadius: 'card',
};

export const CardCount = ({
  data,
  cardsCount,
  index: selectedIndex,
}: ICardCarousselCardCount) => (
  <Wrapped flexDirection="row" center mt={1} testID={`CardCount`}>
    {data.map((_, index) => (
      <Wrapped
        bg={selectedIndex === index ? 'primary' : 'inactive'}
        {...(data.length - 1 === index
          ? { ...countProps }
          : { mr: 1, ...countProps })}></Wrapped>
    ))}
  </Wrapped>
);
