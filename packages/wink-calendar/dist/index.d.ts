import { DateTime } from 'luxon';
declare const Calendar: ({ className, weekDaysExceptions, selectedDay, onClick }: {
    className?: string | undefined;
    weekDaysExceptions?: WeekDay[] | undefined;
    selectedDay?: DateTime | undefined;
    onClick?: ((date: DateTime) => void) | undefined;
}) => JSX.Element;
export declare enum WeekDay {
    SUNDAY = 0,
    MONDAY = 1,
    TUESDAY = 2,
    WEDNESDAY = 3,
    THURSDAY = 4,
    FRIDAY = 5,
    SATURDAY = 6
}
export default Calendar;
