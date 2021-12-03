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

## Typescript support

The package comes with types included
