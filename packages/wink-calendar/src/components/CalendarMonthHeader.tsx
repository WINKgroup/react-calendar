import { capitalize } from 'lodash';
import { CalendarMonthHeaderProps } from '../models/CalendarMonthHeaderProps';
import ChevronLeft from '../../assets/images/chevron-left.svg';
import ChevronRight from '../../assets/images/chevron-right.svg';

export const CalendarMonthHeader = (
  {
    currentMonth,
    onChangeMonth
  }: CalendarMonthHeaderProps) => {
  return <div className='calendar-header'>
    <div
      className='prev-period'
      onClick={() => onChangeMonth?.(currentMonth.minus({ month: 1 }))}
    >
      <img src={ChevronLeft} height={20} width={20} alt='Back' />
    </div>

    <div>
      {capitalize(currentMonth?.toFormat('MMMM yyyy'))}
    </div>

    <div
      className='next-period'
      onClick={() => onChangeMonth?.(currentMonth.plus({ month: 1 }))}
    >
      <img src={ChevronRight} height={20} width={20} alt='Next' />
    </div>
  </div>;
};
