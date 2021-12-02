import { Timestamp } from './Date';

export type CellProps = {
  date: Timestamp;
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
