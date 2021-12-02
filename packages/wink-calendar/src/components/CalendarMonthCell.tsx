import classNames from 'classnames';
import { CellProps } from '../models/CellProps';

const Cell = (
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
    key={date.toISODate()}
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
    {date.day}
  </div>;
};

export default Cell;
