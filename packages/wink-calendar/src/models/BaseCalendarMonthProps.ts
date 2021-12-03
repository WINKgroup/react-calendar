import { CalendarMonthCellConfig, CalendarMonthCellProps } from './CalendarMonthCellProps';
import { Timestamp } from './Date';
import { CalendarEvent } from './CalendarEvent';
import { WeekDay } from './WeekDay';

/** <BaseCalendarMonth /> props /> */
export type BaseCalendarMonthProps = {
  /** Current month visualized on the calendar */
  currentMonth?: Timestamp;
  /** Custom class for the outer container */
  className?: string;
  /**
   * Weekdays to exclude from being rendered
   * @default []
   * */
  weekDaysExceptions?: WeekDay[];
  /**
   * Custom config for any cell based on date
   * @default []
   * */
  cellsConfig?: BaseCalendarMonthCellConfig[];
  /** Disable any cell which date is before this param */
  minDate?: Timestamp;
  /** Disable any cell which date is after this param */
  maxDate?: Timestamp;
  /**
   *  Number of weeks to be rendered at the same time
   *  @default 6
   *  */
  weeks?: number;
  /**
   *  Render cells which date doesn't belong to current month with a opaque style
   *  @default true
   *  */
  opaqueExtraMonthCells?: boolean;
  /**
   * Render or not cells which date doesn't belong to current month
   * @default true
   * */
  showExtraMonthCells?: boolean;
  /**
   * Render current day with a bordered style
   * @default true
   * */
  borderCurrentDay?: boolean;
  /**
   * Navigate to the corresponding month of a cell which date doesn't belong to current month
   * @default true
   * */
  navigateToCorrespondingMonth?: boolean;
  /**
   * Show weekdays labels on top
   * @default true
   * */
  showWeekDaysLabels?: boolean;
  /**
   * Cell component
   * @default {@link CalendarMonthCell}
   * */
  cellComponent?: (props: CalendarMonthCellProps) => JSX.Element;
  /**
   * Events to be shown inside of the calendar cells
   * @default []
   * */
  events?: CalendarEvent[];
  /**
   * Height of the calendar
   * @default '100%'
   * */
  height?: string | number;
  /**
   * Width of the calendar
   * @default '100%'
   * */
  width?: string | number;
  /** Triggered when a cell is clicked */
  onCellClick?: (date: Timestamp) => void;
  /** Triggered when a cell is hovered */
  onCellMouseEnter?: (date: Timestamp) => void;
  /** Triggered when a cell is no longer hovered */
  onCellMouseLeave?: (date: Timestamp) => void;
  /** Triggered when the current month is changed */
  onMonthChange?: (date: Timestamp) => void;
};

export type BaseCalendarMonthCellConfig = CalendarMonthCellConfig & {
  date: Timestamp;
};
