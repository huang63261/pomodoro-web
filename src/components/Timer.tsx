import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import "./Timer.css";

interface TimerProps {
  workDuration: number;
  breakDuration: number;
}

const Timer: React.FC<TimerProps> = ({ workDuration, breakDuration }) => {
  const [time, setTime] = useState(workDuration * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isWorkTime, setIsWorkTime] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning) {
      timer = setInterval(() => {
        // 使用箭頭函數避免狀態更新不正確(競態條件 race condition)，確保取得最新狀態值 "prevTime"
        setTime((prevTime) => {
          if (prevTime === 0) {
            setIsWorkTime(!isWorkTime);
            return isWorkTime ? breakDuration * 60 : workDuration * 60;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, isWorkTime, workDuration, breakDuration]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const toggleTimer = () => setIsRunning(!isRunning);

  const resetTimer = () => {
    setIsRunning(false);
    setTime(workDuration * 60);
    setIsWorkTime(true);
  };

  return (
    <div className="timer">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>{isWorkTime ? "Work Time" : "Break Time"}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="time">{formatTime(time)}</div>
          <div className="control-panel">
            <Button onClick={toggleTimer}>
              {isRunning ? "Pause" : "Start"}
            </Button>
            <Button onClick={resetTimer} variant="outline">
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Timer;
