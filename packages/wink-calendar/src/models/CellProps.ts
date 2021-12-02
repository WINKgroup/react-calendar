import { Timestamp } from './Date';
import { DateTime } from 'luxon';

export type CellProps = {
  date: DateTime;
  config?: CellConfig;
  onClick?: () => void;
};

export type CellConfig = {
  disabled?: boolean;
  style?: {
    active?: boolean;
    opaque?: boolean;
    bordered?: boolean;
  };
};
