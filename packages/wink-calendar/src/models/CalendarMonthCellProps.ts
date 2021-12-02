import { Timestamp } from './Date';
import { CalendarEvent } from './CalendarEvent';

export type CalendarMonthCellProps = {
  date: Timestamp;
  config?: CalendarMonthCellConfig;
  events?: CalendarEvent[];
  onClick?: () => void;
};

export type CalendarMonthCellConfig = {
  disabled?: boolean;
  style?: {
    active?: boolean;
    opaque?: boolean;
    bordered?: boolean;
  };
};
