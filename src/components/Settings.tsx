import React from "react";
import "./Setting.css";

interface SettingsProps {
  workDuration: number;
  breakDuration: number;
  setWorkDuration: (duration: number) => void;
  setBreakDuration: (duration: number) => void;
}

const Settings: React.FC<SettingsProps> = ({
  workDuration,
  breakDuration,
  setWorkDuration,
  setBreakDuration,
}) => {
  return (
    <div className="settings">
      <div>
        <label>Work Duration: </label>
        <input
          type="number"
          value={workDuration}
          onChange={(e) => setWorkDuration(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Break Duration: </label>
        <input
          type="number"
          value={breakDuration}
          onChange={(e) => setBreakDuration(Number(e.target.value))}
        />
      </div>
    </div>
  );
};

export default Settings;
