import { CalendarMonthProps } from '../../models/CalendarMonthProps';
import { BaseCalendarMonth } from './BaseCalendarMonth';
import { BaseCalendarMonthCellConfig } from '../../models/BaseCalendarMonthProps';
import { DateTime } from 'luxon';
import { Timestamp } from '../../models/Date';
import { useState } from 'react';

export const CalendarMonth = (props: CalendarMonthProps) => {
  const [hoveredCell, setHoveredCell] = useState<Timestamp>();

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

      const getDatesRange = (firstDate: Timestamp, secondDate: Timestamp, offset = 0) => {
        return new Array(DateTime.fromMillis(secondDate).diff(DateTime.fromMillis(firstDate), 'day').get('days') + offset)
          .fill(undefined)
          .map((d, i) => props.startDate
            ? DateTime.fromMillis(props.startDate).plus({ day: i })
            : undefined)
          .filter(notEmpty);
      };

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
            ? getDatesRange(props.startDate, props.endDate).map(date => ({
              date: date.toMillis(),
              style: {
                active: true,
                opaque: true
              }
            }))
            :
            [],
          ...props.startDate && !props.endDate && hoveredCell && hoveredCell > props.startDate
            ? getDatesRange(props.startDate, hoveredCell, 1).map(date => ({
              date: date.toMillis(),
              style: {
                active: true,
                opaque: true
              }
            }))
            : [],
          ...cellsConfig ?? []
        ]
      ;

      const onCellClick = (date: Timestamp) => {
        if (!startDate) {
          onSelectStartDate?.(date);
        } else if (!endDate) {
          if (date > startDate) {
            onSelectEndDate?.(date);
          } else {
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
        onCellMouseEnter={setHoveredCell}
        onCellMouseLeave={() => setHoveredCell(undefined)}
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
