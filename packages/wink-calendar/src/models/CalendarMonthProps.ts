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
  mode: 'rangeSelection';
  /** Starting date of the range */
  startDate?: DateTime;
  /** Ending date of the range */
  endDate?: DateTime;
  /** Triggered when first date is selected */
  onSelectStartDate?: (date?: DateTime) => void;
  /** Triggered when second date is selected */
  onSelectEndDate?: (date?: DateTime) => void;
};

export type CalendarMonthCustomProps = {
  mode: 'custom';
  // TODO
};
