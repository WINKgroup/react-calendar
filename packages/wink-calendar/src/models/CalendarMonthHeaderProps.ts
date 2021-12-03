import { DateTime } from 'luxon';

/** <CalendarMonthHeader /> */
export type CalendarMonthHeaderProps = {
  currentMonth: DateTime;
  onChangeMonth?: (month: DateTime) => void;
};
