import * as React from 'react';

import { generateDateToSelector } from '~/utils';
import { useSelectPeriod } from '~/context';

import { IHourSelector } from '~/components/HourSelector/data';
import { HourSelector as Layout } from './Layout';

export const HourSelector = (props: IHourSelector) => {
  const { keys, invalidKeys } = generateDateToSelector();
  const { selectedHour, setSelectedHour } = useSelectPeriod();

  function press(value: string) {
    const newValue = selectedHour === value ? '' : value;
    setSelectedHour(newValue);
  }

  const layoutProps = {
    ...props,
    press,
    invalidKeys,
    selectedHour,
    keys: keys.filter((key) => !invalidKeys.includes(key)),
  };

  return <Layout {...layoutProps} />;
};
