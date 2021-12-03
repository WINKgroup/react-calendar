import { Timestamp } from './Date';
import { CalendarEvent } from './CalendarEvent';

/** <CalendarMonthCell /> */
export type CalendarMonthCellProps = {
  /** Date which this cell represents */
  date: Timestamp;
  /** Configuration object */
  config?: CalendarMonthCellConfig;
  /** Events to be shown inside of this cell */
  events?: CalendarEvent[];
  /** Triggered when cell gets clicked */
  onClick?: () => void;
  /** Triggered when cell gets hovered */
  onMouseEnter?: () => void;
  /** Triggered when cell is no longer hovered */
  onMouseLeave?: () => void;
};

export type CalendarMonthCellConfig = {
  /** Disables click behaviour on the cell */
  disabled?: boolean;
  /** Flags to customize style of the cell */
  style?: {
    active?: boolean;
    opaque?: boolean;
    bordered?: boolean;
  };
};
