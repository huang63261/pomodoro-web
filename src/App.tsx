import { useState } from "react";
import Timer from "./components/Timer";
import Settings from "./components/Settings";
import "./App.css";

function App() {
  const [workDuration, setWorkDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);

  return (
    <div className="app">
      <h1>Pomodoro Timer</h1>
      <Timer workDuration={workDuration} breakDuration={breakDuration} />
      <Settings
        workDuration={workDuration}
        breakDuration={breakDuration}
        setWorkDuration={setWorkDuration}
        setBreakDuration={setBreakDuration}
      />
    </div>
  );
}

export default App;
