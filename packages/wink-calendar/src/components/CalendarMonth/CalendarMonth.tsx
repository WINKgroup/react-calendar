import { CalendarMonthProps } from '../../models/CalendarMonthProps';
import { BaseCalendarMonth } from './BaseCalendarMonth';
import { BaseCalendarMonthCellConfig } from '../../models/BaseCalendarMonthProps';

export const CalendarMonth = (props: CalendarMonthProps) => {
  switch (props.mode) {
    case 'singleSelection':
      const { cellsConfig, ...otherProps } = props;

      const config: BaseCalendarMonthCellConfig[] = [
        ...props.selectedDay
          ? [{
            date: props.selectedDay,
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
    case 'rangeSelection':
      return <BaseCalendarMonth
        {...props}
      />;
    case 'custom':
      return <BaseCalendarMonth
        {...props}
      />;
  }
};
