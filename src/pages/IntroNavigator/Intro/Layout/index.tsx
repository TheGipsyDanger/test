import * as React from 'react';

import { Wrapped } from '~/components';
import { IcLogo } from '~/assets/svg';
import { IIntroLayout } from '~/pages/IntroNavigator/Intro/data';

export const Intro = (props: IIntroLayout) => (
  <Wrapped flex={1} testID={`Intro`} bg="splash" center>
    <IcLogo />
  </Wrapped>
);
