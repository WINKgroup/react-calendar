import './App.css';
import { CalendarMonth } from "wink-react-calendar";
import 'wink-react-calendar/dist/css/style.css';
import { useState } from "react";

function App() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  return (
    <div className='app'>
      <div className='container'>
        <CalendarMonth
          mode='rangeSelection'
          startDate={startDate}
          endDate={endDate}
          onSelectStartDate={setStartDate}
          onSelectEndDate={setEndDate}
        />
      </div>
    </div>
  );
}

export default App;
