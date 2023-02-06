import "./App.css";
import Calendarbig from "./component/calendarbig";
import Calendar from "./component/calendar";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="calendar_min">
          <Calendar />
        </div>
        <div className="calendar_big1">
          <Calendarbig />
        </div>
      </div>
    </div>
  );
}

export default App;
