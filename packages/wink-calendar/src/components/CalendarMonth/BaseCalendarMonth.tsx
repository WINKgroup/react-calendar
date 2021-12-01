import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import { capitalize } from 'lodash';
import { DateTime } from 'luxon';
import Cell from '../Cell';
import { BaseCalendarMonthProps } from '../../models/BaseCalendarMonthProps';
import { CellConfig } from '../../models/CellProps';

const WEEK_LENGTH_FULL = 7;

export const BaseCalendarMonth = (
  {
    currentMonth = DateTime.now(),
    className,
    weekDaysExceptions = [],
    cellsConfig = [],
    minDate,
    maxDate,
    weeks = 6,
    opaqueExtraMonthCells = true,
    borderCurrentDay = true,
    navigateToCorrespondingMonth = true,
    showWeekDaysLabels = true,
    onClick
  }: BaseCalendarMonthProps) => {
  const [today] = useState<DateTime>(DateTime.now());
  const [startOfMonth, setStartOfMonth] = useState<DateTime>();

  useEffect(() => {
    if (currentMonth) {
      setStartOfMonth(currentMonth.startOf('month'));
    }
  }, [currentMonth]);

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
        {capitalize(date.toFormat('ccc'))}
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

        onClick?.(cloned);
      };

      const currentDateStartDay = currentDate.startOf('day');
      const config = cellsConfig.find(c => c.date.startOf('day').equals(currentDateStartDay));

      const defaultConfig: CellConfig = {
        style: {
          opaque: opaqueExtraMonthCells && !isSameMonth,
          bordered: borderCurrentDay && currentDateStartDay.equals(today.startOf('day'))
        },
        disabled:
          minDate && currentDateStartDay < minDate.startOf('day')
          || maxDate && currentDateStartDay > maxDate.startOf('day')
      };

      const item = <Cell
        date={currentDate}
        config={config ?? defaultConfig}
        onClick={onItemClick}
      />

      arr.push(item);

      currentDate = currentDate.plus({ day: 1 });
    }

    return arr;
  };

  return <div className={classNames('calendar-month', className)}>
    <p className='calendar-header'>
      <div
        className='prev-period'
        onClick={() => setStartOfMonth(month => month?.minus({ month: 1 }))}
      >
        <ChevronLeft size={20} />
      </div>

      <div>
        {capitalize(startOfMonth?.toFormat('MMMM yyyy'))}
      </div>

      <div
        className='next-period'
        onClick={() => setStartOfMonth(month => month?.plus({ month: 1 }))}
      >
        <ChevronRight size={20} />
      </div>
    </p>

    <div className='grid' style={{
      gridTemplateColumns: `repeat(${WEEK_LENGTH}, 1fr)`
    }}>
      {showWeekDaysLabels && gridLabels()}

      {grid()}
    </div>
  </div>;
};
