import './App.css';
import Calendar from "wink-calendar";
import 'wink-calendar/dist/css/style.css';
import { useState } from "react";

function App() {
  const [date, setDate] = useState();

  return (
    <div className='app'>
      <div className='container'>
        <Calendar
          selectedDay={date}
          onClick={setDate}
        />
      </div>
    </div>
  );
}

export default App;
