import classNames from 'classnames';
import { CellProps } from '../models/CellProps';
import { DateTime } from 'luxon';

const CalendarMonthCell = (
  {
    date,
    config,
    onClick: pOnClick
  }: CellProps) => {
  const onClick = () => {
    if (!config?.disabled) {
      pOnClick?.();
    }
  };

  return <div
    key={date}
    className={classNames('cell', {
      ...config
        ? {
          ...config.style
            ? {
              'selected': config.style.active,
              'current-day': config.style.bordered,
              'opaque': config.style?.opaque
            }
            : {},
          'disabled': config?.disabled
        }
        : {}
    })}
    onClick={onClick}
  >
    {DateTime.fromMillis(date).day}
  </div>;
};

export default CalendarMonthCell;
