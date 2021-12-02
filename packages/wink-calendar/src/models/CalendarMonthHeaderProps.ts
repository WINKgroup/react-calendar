import { DateTime } from 'luxon';

export type CalendarMonthHeaderProps = {
  currentMonth: DateTime;
  onChangeMonth?: (month: DateTime) => void;
};
