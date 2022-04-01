import { ISelectPeriodDate } from '~/utils';

export interface ICalendar {
  data?: any;
}

export interface ICalendarLayout extends ICalendar {
  press(date: any): void;
  date: ISelectPeriodDate;
}
