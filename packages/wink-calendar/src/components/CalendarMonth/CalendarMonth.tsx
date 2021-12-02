import { CalendarMonthProps } from '../../models/CalendarMonthProps';
import { BaseCalendarMonth } from './BaseCalendarMonth';
import { BaseCalendarMonthCellConfig } from '../../models/BaseCalendarMonthProps';
import { DateTime } from 'luxon';
import { Timestamp } from '../../models/Date';

export const CalendarMonth = (props: CalendarMonthProps) => {
  switch (props.mode) {
    case 'singleSelection': {
      const { cellsConfig, ...otherProps } = props;

      const config: BaseCalendarMonthCellConfig[] = [
        ...props.selectedDate
          ? [{
            date: props.selectedDate,
            style: {
              active: true
            }
          }]
          : [],
        ...cellsConfig ?? []
      ];

      return <BaseCalendarMonth
        cellsConfig={config}
        {...otherProps}
      />;
    }
    case 'rangeSelection': {
      const {
        cellsConfig,
        startDate,
        endDate,
        onSelectStartDate,
        onSelectEndDate,
        ...otherProps
      } = props;

      const config: BaseCalendarMonthCellConfig[] = [
        ...props.startDate
          ? [{
            date: props.startDate,
            style: {
              active: true
            }
          }]
          : [],
        ...props.endDate
          ? [{
            date: props.endDate,
            style: {
              active: true
            }
          }]
          : [],
        ...props.startDate && props.endDate
          ? new Array(DateTime.fromMillis(props.endDate).diff(DateTime.fromMillis(props.startDate), 'day').get('days'))
            .fill(undefined)
            .map((d, i) => props.startDate
              ? DateTime.fromMillis(props.startDate).plus({ day: i })
              : undefined)
            .filter(notEmpty)
            .map(date => ({
              date: date.toMillis(),
              style: {
                active: true,
                opaque: true
              }
            }))
          : [],
        ...cellsConfig ?? []
      ];

      const onCellClick = (date: Timestamp) => {

        if (!startDate) {
          onSelectStartDate?.(date);
        } else if (!endDate) {
          if (date > startDate) {
            onSelectEndDate?.(date);
          } else {
            onSelectEndDate?.(startDate);
            onSelectStartDate?.(date);
          }
        } else {
          onSelectStartDate?.(date);
          onSelectEndDate?.(undefined);
        }
      };

      return <BaseCalendarMonth
        cellsConfig={config}
        onCellClick={onCellClick}
        {...otherProps}
      />;
    }
    case 'custom': {
      return <BaseCalendarMonth
        {...props}
      />;
    }
  }
};

/** Function to assert that a value is not null or undefined */
export function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  if (value === null || value === undefined) return false;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const testDummy: TValue = value;
  return true;
}
