import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import CalendarMonthCell from '../CalendarMonthCell';
import { BaseCalendarMonthProps } from '../../models/BaseCalendarMonthProps';
import { CalendarMonthCellConfig } from '../../models/CalendarMonthCellProps';
import { CalendarMonthHeader } from '../CalendarMonthHeader';

const WEEK_LENGTH_FULL = 7;

export const BaseCalendarMonth = (
  {
    currentMonth: pCurrentMonth,
    className,
    weekDaysExceptions = [],
    cellsConfig = [],
    minDate,
    maxDate,
    weeks = 6,
    opaqueExtraMonthCells = true,
    showExtraMonthCells = true,
    borderCurrentDay = true,
    navigateToCorrespondingMonth = true,
    showWeekDaysLabels = true,
    cellComponent: CellComponent = CalendarMonthCell,
    events = [],
    onCellClick,
    onCellMouseEnter,
    onCellMouseLeave,
    onMonthChange
  }: BaseCalendarMonthProps) => {
  const [today] = useState<DateTime>(DateTime.now());
  const [startOfMonth, setStartOfMonth] = useState<DateTime>(
    (pCurrentMonth
      ? DateTime.fromMillis(pCurrentMonth).startOf('month')
      : undefined)
    ?? DateTime.now().startOf('month')
  );

  useEffect(() => {
    if (pCurrentMonth) {
      setStartOfMonth(DateTime.fromMillis(pCurrentMonth).startOf('month'));
    }
  }, [pCurrentMonth]);

  useEffect(() => {
    onMonthChange?.(startOfMonth.toMillis());
  }, [startOfMonth]);

  const WEEK_LENGTH = WEEK_LENGTH_FULL - weekDaysExceptions.length;

  const gridLabels = () => {
    const startOfWeek = today?.startOf('week');

    return new Array(7).fill(undefined).map((v, i) => {
      const date = startOfWeek?.plus({ day: i });

      if (!date) {
        return null;
      }

      // Except sundays
      if (weekDaysExceptions.includes(date.get('day'))) {
        return null;
      }

      return <div key={date.toISODate()} className='header-cell'>
        {date.toFormat('ccc')}
      </div>;
    });
  };

  const grid = () => {
    if (!startOfMonth) {
      return null;
    }

    const startOfWeek = startOfMonth.startOf('week');
    const arr = [];

    let currentDate = startOfWeek;

    while (currentDate.diff(startOfWeek, 'week').get('week') < weeks) {
      // Remove sundays
      if (weekDaysExceptions.includes(currentDate.day)) {
        continue;
      }

      const isSameMonth = currentDate.hasSame(startOfMonth, 'month');
      let cloned = currentDate;

      const onItemClick = () => {
        if (navigateToCorrespondingMonth && !isSameMonth) {
          setStartOfMonth(cloned.startOf('month'));
        }

        onCellClick?.(cloned.toMillis());
      };

      const currentDateStartDay = currentDate.startOf('day');
      const config = cellsConfig.find(c => DateTime.fromMillis(c.date).startOf('day').equals(currentDateStartDay));

      const defaultConfig: CalendarMonthCellConfig = {
        style: {
          opaque: opaqueExtraMonthCells && !isSameMonth,
          bordered: borderCurrentDay && currentDateStartDay.equals(today.startOf('day'))
        },
        disabled:
          !!minDate && currentDateStartDay < DateTime.fromMillis(minDate).startOf('day')
          || !!maxDate && currentDateStartDay > DateTime.fromMillis(maxDate).startOf('day')
      };

      const dayEvents = events.filter(({ date }) => DateTime.fromMillis(date).startOf('day').equals(currentDate));

      let item;

      if (!showExtraMonthCells && !isSameMonth) {
        item = <div />;
      } else {
        item = <CellComponent
          date={currentDate.toMillis()}
          config={config ?? defaultConfig}
          events={dayEvents}
          onClick={onItemClick}
          onMouseEnter={() => onCellMouseEnter?.(cloned.toMillis())}
          onMouseLeave={() => onCellMouseLeave?.(cloned.toMillis())}
        />;
      }

      arr.push(item);

      currentDate = currentDate.plus({ day: 1 });
    }

    return arr;
  };

  return <div className={classNames('calendar-month', className)}>
    <CalendarMonthHeader
      currentMonth={startOfMonth}
      onChangeMonth={setStartOfMonth}
    />

    <div className='grid' style={{
      gridTemplateColumns: `repeat(${WEEK_LENGTH}, 1fr)`
    }}>
      {showWeekDaysLabels && gridLabels()}

      {grid()}
    </div>
  </div>;
};
