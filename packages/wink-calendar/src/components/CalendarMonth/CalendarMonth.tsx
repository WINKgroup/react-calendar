import { CalendarMonthProps } from '../../models/CalendarMonthProps';
import { BaseCalendarMonth } from './BaseCalendarMonth';
import { BaseCalendarMonthCellConfig } from '../../models/BaseCalendarMonthProps';
import { DateTime } from 'luxon';

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
          ? new Array(
            props.startDate < props.endDate
              ? props.endDate.diff(props.startDate, 'day').get('days')
              : props.startDate.diff(props.endDate, 'day').get('days')
          )
            .fill(undefined)
            .map((d, i) => {
              if (!props.startDate || !props.endDate) {
                return;
              }

              return props.startDate < props.endDate
                ? props.startDate?.plus({ day: i })
                : props.endDate?.plus({ day: i })
            })
            .filter(notEmpty)
            .map(date => ({
              date,
              style: {
                active: true,
                opaque: true
              }
            }))
          : [],
        ...cellsConfig ?? []
      ];

      const onCellClick = (date: DateTime) => {
        if (!startDate) {
          onSelectStartDate?.(date);
        } else if (!endDate) {
          onSelectEndDate?.(date);
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
