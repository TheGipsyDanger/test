import * as React from 'react';
import { Calendar as CalendarBase } from 'react-native-calendars';
import { Wrapped } from '~/components/Basics/Wrapped';
import { colors } from '~/styles/Theme';

import { ICalendarLayout } from '~/components/Calendar/data';

export const Calendar = ({ press, date }: ICalendarLayout) => (
  <Wrapped
    p={0}
    borderBottomLeftRadius="card"
    borderBottomRightRadius="card"
    bg="background">
    <CalendarBase
      theme={{
        todayTextColor: colors['primary'],
        calendarBackground: colors['background'],
        textSectionTitleColor: colors['primary'],
        dayTextColor: colors['text'],
        textDayFontFamily: 'Regular',
        textMonthFontFamily: 'Medium',
        textDayHeaderFontFamily: 'Medium',
      }}
      markedDates={{ ...date }}
      onDayPress={(day: any) => press(day)}
      monthFormat={'MMMM yyyy'}
      hideArrows={true}
      disableMonthChange={false}
      firstDay={1}
    />
  </Wrapped>
);
