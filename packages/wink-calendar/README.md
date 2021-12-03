# WiNK React Calendar

Yet another calendar React component

[![wink developer](https://badgen.net/badge/WiNK/Developer/ff5a3a)](https://wink.by)
[![npm](https://img.shields.io/npm/v/wink-react-calendar)](https://www.npmjs.com/package/wink-react-calendar)

## Why should I use it?

- Get things done quickly with `singleSelection` and `rangeSelection` modes ✅
- Or do your own thing with `custom` mode and get creative 🎨
- Calendar events? We've got you covered 
- Responsive and mobile first 📱
- Continously updated 🔥
- Layout built with the flexible CSS [Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) ✅
- Built on top of the modern and lightweight [Luxon](https://moment.github.io/luxon/#/) ⏰

## Get Started

```
$ npm i wink-react-calendar
```

## Usage

1. Import the css module
```
import 'wink-react-calendar/dist/css/style.css';
```

2. Import and use the component
```
import Calendar from 'wink-react-calendar';

<Calendar
  selectedDay={date}
  onClick={setDate}
/>
```
## Props

<b>CalendarMonth</b>

| Name | Type | Default | Description
| --- | --- | --- | --- |
| mode | 'singleSelection' \| 'rangeSelection' \| 'custom' | undefined | Define the mode of the calendar
| currentMonth | Timestamp | Current month | Current month visualized on the calendar |
| className | string | undefined | Custom class for the outer container |
| weekDaysExceptions | WeekDay[] | [] | Weekdays to exclude from being rendered |
| cellsConfig | BaseCalendarMonthCellConfig[] | [] | Custom config for any cell based on date |
| minDate | Timestamp | undefined | Disable any cell which date is before this param |
| maxDate | Timestamp | undefined | Disable any cell which date is after this param |
| weeks | number | 6 | Number of weeks to be rendered at the same time |
| opaqueExtraMonthCells | boolean | true | Render cells which date doesn't belong to current month with a opaque style |
| borderCurrentDay | boolean | true | Render current day with a bordered style |
| navigateToCorrespondingMonth | boolean | true | Navigate to the corresponding month of a cell which date doesn't belong to current month | 
| showWeekDaysLabels | boolean | true | Show weekdays labels on top |
| onCellClick | (date: Timestamp) => void | undefined | Triggered when a cell is clicked |
| onMonthChange | (date: Timestamp) => void | undefined | Triggered when the current month is changed |
| selectedDate | Timestamp | undefined | (singleSelection mode only) The current selected day which by default is shown with an active style |
| startDate | Timestamp | undefined | (rangeSelection mode only) Starting date of the range |
| endDate | Timestamp | undefined | (rangeSelection mode only) Ending date of the range |
| onSelectStartDate | (date?: Timestamp) => void | undefined | (rangeSelection mode only) Triggered when first date is selected |
| onSelectEndDate | (date?: Timestamp) => void | undefined | (rangeSelection mode only) Triggered when second date is selected |

## Typescript support

The package comes with types included
