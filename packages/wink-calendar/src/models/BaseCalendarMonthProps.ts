import { DateTime } from 'luxon';
import { CellConfig } from './CellProps';

export type BaseCalendarMonthProps = {
  currentMonth?: DateTime;
  className?: string;
  weekDaysExceptions?: WeekDay[];
  cellsConfig?: BaseCalendarMonthCellConfig[];
  minDate?: DateTime;
  maxDate?: DateTime;
  weeks?: number;
  opaqueExtraMonthCells?: boolean;
  borderCurrentDay?: boolean;
  navigateToCorrespondingMonth?: boolean;
  showWeekDaysLabels?: boolean;
  onClick?: (date: DateTime) => void;
  onMonthChange?: (date: DateTime) => void;
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