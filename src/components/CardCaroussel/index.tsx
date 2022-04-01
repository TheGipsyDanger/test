import * as React from 'react';
import { useState } from 'react';

import { ICardCaroussel, data } from '~/components/CardCaroussel/data';
import { CardCaroussel as Layout } from './Layout';

export const CardCaroussel = (props: ICardCaroussel) => {
  const [initial] = useState<number>(() => {
    return data.findIndex((item) => item.principal === true) || 0;
  });

  const [index, setIndex] = useState<number>(initial);

  function updateIndex(index: number) {
    setIndex(() => index);
  }

  const layoutProps = {
    ...props,
    data,
    index,
    initial,
    updateIndex,
    cardsCount: data.length,
    hasOnlyOne: data.length > 1,
  };

  return <Layout {...layoutProps} />;
};
