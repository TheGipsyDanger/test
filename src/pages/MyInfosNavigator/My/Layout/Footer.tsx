import * as React from 'react';

import { Wrapped, Button } from '~/components/Basics';
import { BottomSpotlight } from '~/components/BottomSpotlight';

export const Footer = ({ t, onPress }: any) => {
  return (
    <BottomSpotlight>
      <Wrapped m={2}>
        <Button
          {...{ onPress }}
          height={40}
          textVariant="outback:h2"
          text={t('PROFILE.MY.BTN')}
        />
      </Wrapped>
    </BottomSpotlight>
  );
};
