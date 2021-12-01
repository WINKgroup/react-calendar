import './App.css';
import { CalendarMonth } from "wink-react-calendar";
import 'wink-react-calendar/dist/css/style.css';
import { useState } from "react";

function App() {
  const [date, setDate] = useState();

  return (
    <div className='app'>
      <div className='container'>
        <CalendarMonth
          mode='singleSelection'
          selectedDay={date}
          onCellClick={setDate}
        />
      </div>
    </div>
  );
}

export default App;
