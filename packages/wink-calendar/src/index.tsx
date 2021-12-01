import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import { capitalize } from 'lodash';
import { DateTime } from 'luxon';

const WEEK_LENGTH_FULL = 7;

const Calendar = ({ className, weekDaysExceptions = [], selectedDay, onClick }: {
  className?: string;
  weekDaysExceptions?: WeekDay[];
  selectedDay?: DateTime;
  onClick?: (date: DateTime) => void;
}) => {
  const [today] = useState<DateTime>(DateTime.now());
  const [startOfMonth, setStartOfMonth] = useState<DateTime>();

  useEffect(() => {
    if (today) {
      setStartOfMonth(today.startOf('month'));
    }
  }, [today]);

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

    while (currentDate.diff(startOfWeek, 'week').get('week') < 6) {
      // Remove sundays
      if (weekDaysExceptions.includes(currentDate.day)) {
        continue;
      }

      const isSameMonth = currentDate.hasSame(startOfMonth, 'month');
      let cloned = currentDate;

      const onItemClick = () => {
        if (!isSameMonth) {
          setStartOfMonth(cloned.startOf('month'));
        }

        onClick?.(cloned);
      };

      const item = <div
        key={currentDate.toISODate()}
        className={classNames('cell', {
          'disabled': !isSameMonth,
          'selected': selectedDay && currentDate.startOf('day').equals(selectedDay.startOf('day')),
          'current-day': today && currentDate.startOf('day').equals(today.startOf('day'))
        })}
        onClick={onItemClick}
      >
        {currentDate.day}
      </div>;

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
      {gridLabels()}

      {grid()}
    </div>
  </div>;
};

export enum WeekDay {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY
}

export default Calendar;
