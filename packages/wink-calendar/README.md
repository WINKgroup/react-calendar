# WiNK React Calendar

[![npm](https://img.shields.io/npm/v/wink-react-calendar)](https://www.npmjs.com/package/wink-react-calendar)
[![Website Status](https://img.shields.io/website?url=https%3A%2F%2Fwinkgroup.github.io%2Freact-calendar%2F)](https://winkgroup.github.io/react-calendar/)
[![downloads](https://img.shields.io/npm/dt/wink-react-calendar?label=downloads)](https://www.npmjs.com/package/wink-react-calendar)

A calendar component which is highly customizable yet plug and play for most usual use cases.

[<img alt="calendar preview" src="https://winkgroup.github.io/react-calendar/calendar_month_preview.png" height="200px"/>](https://winkgroup.github.io/react-calendar/)

## Table of contents

1. [Why should I use this?](#why-should-i-use-this)
1. [I want to give it a try!](#i-want-to-give-it-a-try)
1. [Get Started](#get-started)
1. [Usage](#usage)
1. [Component Props](#component-props)
1. [TypeScript Support](#typescript-support)
1. [Contribute](#contribute)
1. [Roadmap](#roadmap)
1. [Maintainers](#maintainers)

## Why should I use this?

- ✅ Get things done quickly with `singleSelection` and `rangeSelection` modes
- 🎨 Or do your own thing with `custom` mode and get creative
- 📅 Calendar events? We've got you covered
- 📱 Responsive and mobile first
- 🔥 Continuously updated
- ✅ Layout built with the flexible CSS [Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- ⏰ Built on top of the modern and lightweight [Luxon](https://moment.github.io/luxon/#/)

## I want to give it a try!

You can check out the demo [here](https://winkgroup.github.io/react-calendar/).

## Get Started
Install the package
```
$ npm i wink-react-calendar
```
or
```
$ yarn add wink-react-calendar
```

## Usage

1. Import the css module
```
import 'wink-react-calendar/dist/css/style.css';
```

2. Import and use the component
```
import { CalendarMonth } from 'wink-react-calendar';

...

const [date, setDate] = useState();

...

<CalendarMonth
  mode='singleSelection'
  selectedDate={date}
  onCellClick={setDate}
/>
```
## Component Props

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
| height | string \| number | '100%' | Height of the calendar |
| width | string \| number | '100%' | Width of the calendar |
| showExtraMonthCells | boolean | true | Render or not cells which date doesn't belong to current month |
| events | CalendarEvent[] | [] | Events to be shown inside of the calendar cells |
| selectedDate | Timestamp | undefined | (singleSelection mode only) The current selected day which by default is shown with an active style |
| startDate | Timestamp | undefined | (rangeSelection mode only) Starting date of the range |
| endDate | Timestamp | undefined | (rangeSelection mode only) Ending date of the range |
| cellComponent | (props: CalendarMonthCellProps) => JSX.Element | CalendarMonthCell | Component for the cell of a day |
| onCellClick | (date: Timestamp) => void | undefined | Triggered when a cell is clicked |
| onMonthChange | (date: Timestamp) => void | undefined | Triggered when the current month is changed |
| onSelectStartDate | (date?: Timestamp) => void | undefined | (rangeSelection mode only) Triggered when first date is selected |
| onSelectEndDate | (date?: Timestamp) => void | undefined | (rangeSelection mode only) Triggered when second date is selected |
| onCellMouseEnter | (date: Timestamp) => void | undefined | Triggered when a cell is hovered |
| onCellMouseLeave | (date: Timestamp) => void | undefined | Triggered when a cell is no longer hovered |

## TypeScript Support

The package comes with types included.

## Contribute

Contributions are very welcome. Not all PRs may be merged but please don't take it personally!

1. Fork and clone the repository

1. Install package dependencies

   ```
   npm install
   ```

1. Build on file changes

   ```
   npm run watch:scss
   ```
   and on another terminal
   ```
   npm run watch:tsc
   ```

1. Or build once

   ```
   npm run build
   ```

## Roadmap

- [x] Add instructions in the README on how to build and run this package for contributors.
- [ ] Separate CSS in two separate modules:
   1. Unstyled which contains layout only CSS. Developer may only import this to style  in their own way.
   1. Styled which contains CSS that provides developers a ready-to-use styled calendar.
- [ ] Make sure that all elements have a (good) classname set to them so that developers can easily style them through CSS.
- [ ] Make a documentation on all those classnames.
- [ ] Optionally style differently weekend days.
- [ ] Add picker of months, years, (decades?) accessible through the header.
- [ ] We could provide style customization through SASS similiar to what [Bootstrap does](https://getbootstrap.com/docs/5.0/customize/sass/).

## Maintainers

- [oxcened](https://github.com/oxcened)
