import { DateTime } from 'luxon';
import { CellConfig } from './CellProps';

export type BaseCalendarMonthProps = {
  className?: string;
  weekDaysExceptions?: WeekDay[];
  cellsConfig?: BaseCalendarMonthCellConfig[];
  minDate?: DateTime;
  maxDate?: DateTime;
  onClick?: (date: DateTime) => void;
};

export type BaseCalendarMonthCellConfig = CellConfig & {
  date: DateTime;
};

export enum WeekDay {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY
}
