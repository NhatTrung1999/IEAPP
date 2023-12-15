import { Typography } from "@mui/material";
import React, { useState } from "react";
import TimerTable from "./TimerTable";

const StopWatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [mm, setMM] = useState(0);
  const [ss, setSS] = useState(0);
  const [ms, setMS] = useState(0);

  let timerID = 0;

  const clickHandler = () => {
    if (isRunning) {
      clearInterval(timerID);
    } else {
      timerID = setInterval(() => {
        setMS((prevMs) => {
          let newMs = prevMs + 1;
          if (newMs >= 100) {
            setSS((prevSs) => {
              let newSs = prevSs + 1;
              if (newSs >= 60) {
                setMM((prevMm) => prevMm + 1);
                newSs = 0;
              }
              return newSs;
            });
            newMs = 0;
          }
          return newMs;
        });
      }, 10);
    }
    setIsRunning(!isRunning);
  };

  return (
    <>
      <Typography variant="h2" component="h2" textAlign="center">
        00:00:00
      </Typography>
      <TimerTable />
    </>
  );
};

export default StopWatch;
