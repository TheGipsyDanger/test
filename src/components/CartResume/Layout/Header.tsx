import * as React from 'react';
import moment from 'moment-with-locales-es6';

import { Wrapped, Text, Conditional } from '~/components/Basics';

import { ICartResumeLayoutHeader } from '~/components/CartResume/data';

export const Header = ({ t, fullInfo = true }: ICartResumeLayoutHeader) => (
  <Wrapped testID={`CartResume`}>
    <Wrapped center mb={4}>
      <Text variant="outback:h2">{t('CART.RESUME.HEADER_TITLE')}</Text>
    </Wrapped>
    <Conditional render={fullInfo}>
      <Wrapped flexDirection="row" center mb={4}>
        <Text variant="outback:h4">{t('CART.RESUME.FORECAST')}</Text>
        <Text variant="outback:h4">{`${moment()
          .locale('pt-BR')
          .format('hh:mm')} - ${moment()
          .locale('pt-BR')
          .add(50, 'minutes')
          .format('hh:mm')}`}</Text>
      </Wrapped>
    </Conditional>
    <Wrapped height={1} bg="inactive" mb={4} />
  </Wrapped>
);
