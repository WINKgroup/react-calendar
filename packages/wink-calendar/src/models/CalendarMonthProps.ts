import { BaseCalendarMonthProps } from './BaseCalendarMonthProps';
import { Timestamp } from './Date';

/** <CalendarMonth /> props /> */
export type CalendarMonthProps =
  BaseCalendarMonthProps & (
  | CalendarMonthSingleSelectionProps
  | CalendarMonthRangeSelectionProps
  | CalendarMonthCustomProps
  );

export type CalendarMonthSingleSelectionProps = {
  /** Define the mode of the calendar */
  mode: 'singleSelection';
  /** The current selected day which by default is shown with an active style */
  selectedDate?: Timestamp;
};

export type CalendarMonthRangeSelectionProps = {
  /** Define the mode of the calendar */
  mode: 'rangeSelection';
  /** Starting date of the range */
  startDate?: Timestamp;
  /** Ending date of the range */
  endDate?: Timestamp;
  /** Triggered when first date is selected */
  onSelectStartDate?: (date?: Timestamp) => void;
  /** Triggered when second date is selected */
  onSelectEndDate?: (date?: Timestamp) => void;
};

export type CalendarMonthCustomProps = {
  /** Define the mode of the calendar */
  mode: 'custom';
  // TODO
};
