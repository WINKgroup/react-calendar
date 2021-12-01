"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeekDay = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const react_1 = require("react");
const react_bootstrap_icons_1 = require("react-bootstrap-icons");
const lodash_1 = require("lodash");
const luxon_1 = require("luxon");
const WEEK_LENGTH_FULL = 7;
const Calendar = ({ className, weekDaysExceptions = [], selectedDay, onClick }) => {
    const [today] = (0, react_1.useState)(luxon_1.DateTime.now());
    const [startOfMonth, setStartOfMonth] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        if (today) {
            setStartOfMonth(today.startOf('month'));
        }
    }, [today]);
    const WEEK_LENGTH = WEEK_LENGTH_FULL - weekDaysExceptions.length;
    const gridLabels = () => {
        const startOfWeek = today === null || today === void 0 ? void 0 : today.startOf('week');
        return new Array(7).fill(undefined).map((v, i) => {
            const date = startOfWeek === null || startOfWeek === void 0 ? void 0 : startOfWeek.plus({ day: i });
            if (!date) {
                return null;
            }
            // Except sundays
            if (weekDaysExceptions.includes(date.get('day'))) {
                return null;
            }
            return (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'header-cell' }, { children: (0, lodash_1.capitalize)(date.toFormat('ccc')) }), date.toISODate());
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
                onClick === null || onClick === void 0 ? void 0 : onClick(cloned);
            };
            const item = (0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)('cell', {
                    'disabled': !isSameMonth,
                    'selected': selectedDay && currentDate.startOf('day').equals(selectedDay.startOf('day')),
                    'current-day': today && currentDate.startOf('day').equals(today.startOf('day'))
                }), onClick: onItemClick }, { children: currentDate.day }), currentDate.toISODate());
            arr.push(item);
            currentDate = currentDate.plus({ day: 1 });
        }
        return arr;
    };
    return (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)('calendar-month', className) }, { children: [(0, jsx_runtime_1.jsxs)("p", Object.assign({ className: 'calendar-header' }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'prev-period', onClick: () => setStartOfMonth(month => month === null || month === void 0 ? void 0 : month.minus({ month: 1 })) }, { children: (0, jsx_runtime_1.jsx)(react_bootstrap_icons_1.ChevronLeft, { size: 20 }, void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", { children: (0, lodash_1.capitalize)(startOfMonth === null || startOfMonth === void 0 ? void 0 : startOfMonth.toFormat('MMMM yyyy')) }, void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'next-period', onClick: () => setStartOfMonth(month => month === null || month === void 0 ? void 0 : month.plus({ month: 1 })) }, { children: (0, jsx_runtime_1.jsx)(react_bootstrap_icons_1.ChevronRight, { size: 20 }, void 0) }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'grid', style: {
                    gridTemplateColumns: `repeat(${WEEK_LENGTH}, 1fr)`
                } }, { children: [gridLabels(), grid()] }), void 0)] }), void 0);
};
var WeekDay;
(function (WeekDay) {
    WeekDay[WeekDay["SUNDAY"] = 0] = "SUNDAY";
    WeekDay[WeekDay["MONDAY"] = 1] = "MONDAY";
    WeekDay[WeekDay["TUESDAY"] = 2] = "TUESDAY";
    WeekDay[WeekDay["WEDNESDAY"] = 3] = "WEDNESDAY";
    WeekDay[WeekDay["THURSDAY"] = 4] = "THURSDAY";
    WeekDay[WeekDay["FRIDAY"] = 5] = "FRIDAY";
    WeekDay[WeekDay["SATURDAY"] = 6] = "SATURDAY";
})(WeekDay = exports.WeekDay || (exports.WeekDay = {}));
exports.default = Calendar;
