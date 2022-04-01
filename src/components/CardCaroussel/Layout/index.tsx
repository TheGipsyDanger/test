import * as React from 'react';

import { Wrapped, Conditional } from '~/components/Basics';
import { Card } from './Card';
import { CardCount } from './CardCount';
import CoverFlow from 'vindicce-coverflow-react-native';

import { ICardCarousselLayout } from '~/components/CardCaroussel/data';

const cardStyled = {
  width: 128,
  height: 80,
  borderRadius: 'creditCard',
};

export const CardCaroussel = (props: ICardCarousselLayout) => {
  const { data, hasOnlyOne, updateIndex, initial } = props;
  return (
    <Wrapped flex={1} testID={`CardCaroussel`}>
      <Conditional render={hasOnlyOne}>
        <CoverFlow
          style={{ height: 80 }}
          onChange={(index: number) => updateIndex(index)}
          onPress={() => {}}
          spacing={70}
          midRotation={0}
          scaleDown={0.6}
          scaleFurther={0}
          initialSelection={initial}>
          {data.map((item, index) => (
            <Card key={index} {...{ ...cardStyled, ...item }} />
          ))}
        </CoverFlow>
      </Conditional>
      <CardCount {...props} />
    </Wrapped>
  );
};
// <Wrapped flex={1} center>
//   <Card {...cardStyled} bg="red" />
// </Wrapped>
