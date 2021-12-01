import { DateTime } from 'luxon';
import { BaseCalendarMonthProps } from './BaseCalendarMonthProps';

/** <CalendarMonth /> props /> */
export type CalendarMonthProps =
  BaseCalendarMonthProps & (
  | CalendarMonthSingleSelectionProps
  | CalendarMonthRangeSelectionProps
  | CalendarMonthCustomProps
  );

export type CalendarMonthSingleSelectionProps = {
  mode: 'singleSelection';
  /** The current selected day which by default is shown with an active style */
  selectedDate?: DateTime;
};

export type CalendarMonthRangeSelectionProps = {
  mode: 'rangeSelection',
  startDate?: DateTime;
  endDate?: DateTime;
  onSelectStartDate?: (date?: DateTime) => void;
  onSelectEndDate?: (date?: DateTime) => void;
};

export type CalendarMonthCustomProps = {
  mode: 'custom'
  // TODO
};
