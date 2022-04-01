import * as React from 'react';

import { Wrapped, Button, Conditional } from '~/components/Basics';
import { BottomSpotlight } from '~/components/BottomSpotlight';

import { IQueueFooter } from '~/pages/UserActionNavigator/Queue/data';

export const Footer = ({ press, isValid }: IQueueFooter) => {
  return (
    <BottomSpotlight>
      <Wrapped flex={1} mx={4} mt={2} position="relative">
        <Conditional render={isValid}>
          <Button
            height={54}
            onPress={press}
            textVariant="outback:h2"
            text="Verificar disponibilidade"
          />
          <Button
            disabled={true}
            height={54}
            onPress={press}
            textVariant="outback:h2"
            text="Verificar disponibilidade"
          />
        </Conditional>
      </Wrapped>
    </BottomSpotlight>
  );
};
