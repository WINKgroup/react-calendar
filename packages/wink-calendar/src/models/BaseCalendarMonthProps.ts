import { CalendarMonthCellConfig, CalendarMonthCellProps } from './CalendarMonthCellProps';
import { Timestamp } from './Date';
import { CalendarEvent } from './CalendarEvent';

/** <BaseCalendarMonth /> props /> */
export type BaseCalendarMonthProps = {
  /** Current month visualized on the calendar */
  currentMonth?: Timestamp;
  /** Custom class for the outer container */
  className?: string;
  /** Weekdays to exclude from being rendered */
  weekDaysExceptions?: WeekDay[];
  /** Custom config for any cell based on date */
  cellsConfig?: BaseCalendarMonthCellConfig[];
  /** Disable any cell which date is before this param */
  minDate?: Timestamp;
  /** Disable any cell which date is after this param */
  maxDate?: Timestamp;
  /** Number of weeks to be rendered at the same time */
  weeks?: number;
  /** Render cells which date doesn't belong to current month with a opaque style */
  opaqueExtraMonthCells?: boolean;
  /** Render or not cells which date doesn't belong to current month */
  showExtraMonthCells?: boolean;
  /** Render current day with a bordered style */
  borderCurrentDay?: boolean;
  /** Navigate to the corresponding month of a cell which date doesn't belong to current month */
  navigateToCorrespondingMonth?: boolean;
  /** Show weekdays labels on top */
  showWeekDaysLabels?: boolean;
  /** Triggered when a cell is clicked */
  onCellClick?: (date: Timestamp) => void;
  /** Triggered when the current month is changed */
  onMonthChange?: (date: Timestamp) => void;
  /** Custom day cell component */
  cellComponent?: (props: CalendarMonthCellProps) => JSX.Element;
  /** Events to be shown inside of the calendar cells */
  events?: CalendarEvent[];
};

export type BaseCalendarMonthCellConfig = CalendarMonthCellConfig & {
  date: Timestamp;
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
