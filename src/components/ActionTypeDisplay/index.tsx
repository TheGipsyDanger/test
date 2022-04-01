import * as React from 'react';
import { useTranslation } from 'react-i18next';

import {
  IcActionReserve,
  IcActionDelivey,
  IcActionWithdrawal,
} from '~/assets/svg';

import { IElementMap, IStringMap } from '~/utils';

import { IActionTypeDisplay } from '~/components/ActionTypeDisplay/data';
import { ActionTypeDisplay as Layout } from './Layout';

export const ActionTypeDisplay = (props: IActionTypeDisplay) => {
  const { t } = useTranslation();
  const { type, isSelected } = props;

  const color = isSelected ? 'white' : 'text';

  const icons: IElementMap = {
    delivery: <IcActionDelivey color={color} />,
    reserve: <IcActionReserve color={color} />,
    withdrawal: <IcActionWithdrawal color={color} />,
  };

  const labels: IStringMap = {
    delivery: t('ACTION.OUTBACK.ACTION_TYPE_DISPLAY.LABEL.DELIVERY'),
    reserve: t('ACTION.OUTBACK.ACTION_TYPE_DISPLAY.LABEL.RESERVE'),
    withdrawal: t('ACTION.OUTBACK.ACTION_TYPE_DISPLAY.LABEL.WITHDRAWAL'),
  };

  const description: IStringMap = {
    delivery: t('ACTION.OUTBACK.ACTION_TYPE_DISPLAY.DESCRIPTION.DELIVERY'),
    reserve: t('ACTION.OUTBACK.ACTION_TYPE_DISPLAY.DESCRIPTION.RESERVE'),
    withdrawal: t('ACTION.OUTBACK.ACTION_TYPE_DISPLAY.DESCRIPTION.WITHDRAWAL'),
  };

  const layoutProps = {
    ...props,
    label: labels[type],
    description: description[type],
    icon: icons[type],
  };

  return <Layout {...layoutProps} />;
};
