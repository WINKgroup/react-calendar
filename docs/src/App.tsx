import './App.css';
import { CalendarMonth } from 'wink-react-calendar';
import { useState } from 'react';

function App() {
  const [date, setDate] = useState<number>();

  const [startDate, setStartDate] = useState<number>();
  const [endDate, setEndDate] = useState<number>();

  return (
    <div className='App p-3 mb-5'>
      <p className='display-3'>Wink React Calendar</p>

      <div className='mt-5'>
        <p className='h5'>Simple selection demo</p>
        <div className='calendar-container'>
          <CalendarMonth
            mode='singleSelection'
            selectedDate={date}
            onCellClick={setDate}
          />
        </div>
      </div>

      <hr className='mt-5'/>

      <div className='mt-5'>
        <p className='h5'>Range selection demo</p>
        <div className='calendar-container'>
          <CalendarMonth
            mode='rangeSelection'
            startDate={startDate}
            endDate={endDate}
            onSelectStartDate={setStartDate}
            onSelectEndDate={setEndDate}
          />
        </div>
      </div>

    </div>
  );
}

export default App;
