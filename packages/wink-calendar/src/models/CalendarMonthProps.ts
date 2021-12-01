import { DateTime } from 'luxon';
import { BaseCalendarMonthProps } from './BaseCalendarMonthProps';

export type CalendarMonthProps =
  BaseCalendarMonthProps & (
  | CalendarMonthSingleSelectionProps
  | CalendarMonthRangeSelectionProps
  | CalendarMonthCustomProps
  );

export type CalendarMonthSingleSelectionProps = {
  mode: 'singleSelection'
  selectedDay?: DateTime;
};

export type CalendarMonthRangeSelectionProps = {
  mode: 'rangeSelection'
  // TODO
};

export type CalendarMonthCustomProps = {
  mode: 'custom'
  // TODO
};
