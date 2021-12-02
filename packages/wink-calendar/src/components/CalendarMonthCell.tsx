import classNames from 'classnames';
import { CalendarMonthCellProps } from '../models/CalendarMonthCellProps';
import { DateTime } from 'luxon';

const CalendarMonthCell = (
  {
    date,
    config,
    events = [],
    onClick: pOnClick
  }: CalendarMonthCellProps) => {
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

    <div className={classNames('event-dot', { show: !!events.length })} />
  </div>;
};

export default CalendarMonthCell;
