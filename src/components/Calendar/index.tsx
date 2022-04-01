import * as React from 'react';
import { LocaleConfig } from 'react-native-calendars';
import { formatDateToSelector } from '~/utils';

import { useSelectPeriod } from '~/context';
import { colors } from '~/styles/Theme';

import { ICalendar } from '~/components/Calendar/data';
import { Calendar as Layout } from './Layout';

LocaleConfig.locales['pt-BR'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  dayNames: [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ],
  dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'],
};

LocaleConfig.defaultLocale = 'pt-BR';

export const Calendar = (props: ICalendar) => {
  const { date, setDate } = useSelectPeriod();

  function press(date: any) {
    const selectedDate = {
      [date.dateString]: {
        selected: true,
        selectedColor: colors['primary'],
      },
    };
    setDate(selectedDate);
  }

  const layoutProps = {
    ...props,
    date,
    press,
  };

  return <Layout {...layoutProps} />;
};
