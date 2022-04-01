import * as React from 'react';

import { Wrapped, Text } from '~/components';
import { IElementMap } from '~/utils';
import {
  IcChat,
  IcCard,
  IcLogout,
  IcProfile,
  IcArrowRight,
  IcLocalization,
  IcProfileAlert,
  IcProfileQuestion,
} from '~/assets/svg';

import { IProfileCard } from '~/pages/ProfileNavigator/Profile/data';

const Icons: IElementMap = {
  mapLocation: <IcLocalization width={18} height={18} color="text" />,
  person: <IcProfile width={18} height={18} color="text" />,
  card: <IcCard color="text" />,
  alert: <IcProfileAlert color="text" />,
  question: <IcProfileQuestion color="text" />,
  chat: <IcChat color="text" />,
  logout: <IcLogout color="text" />,
};

export const Card = ({ title, subtitle, icon, ...props }: IProfileCard) => (
  <Wrapped
    px={4}
    height={64}
    bg="modals"
    variant="outback:fullRadius"
    justifyContent="center"
    {...props}>
    <Wrapped variant="outback:card:row:center" justifyContent="space-between">
      <Wrapped height={64} center mr={4}>
        {Icons[icon]}
      </Wrapped>
      <Wrapped flex={1}>
        <Text mb={0} variant="outback:h2">
          {title}
        </Text>
        <Text variant="outback:body">{subtitle}</Text>
      </Wrapped>
      <IcArrowRight />
    </Wrapped>
  </Wrapped>
);
