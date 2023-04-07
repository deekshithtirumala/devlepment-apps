import BtnComponent from "./components/btnComponent";
import DisplayComponent from "./components/displayComponent";
import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  var updatedms = time.ms,
    updateds = time.s,
    updatedm = time.m,
    updatedh = time.h;

  const run = () => {
    if (updatedm === 60) {
      updatedh++;
      updatedm = 0;
    }
    if (updateds === 60) {
      updatedm++;
      updateds = 0;
    }
    if (updatedms === 100) {
      updateds++;
      updatedms = 0;
    }
    updatedms++;
    return setTime({ ms: updatedms, s: updateds, m: updatedm, h: updatedh });
  };
  const start = () => {
    run();
    setInterv(setInterval(run, 10));
  };
  const stop = () => {
    clearInterval(interv);
    setInterv();
  };
  const reset = () => {
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };
  return (
    <div>
      <h1>-Stopwatch </h1>
      <div className="App">
        <DisplayComponent time={time} />
        <BtnComponent start={start} stop={stop} reset={reset} />
      </div>
    </div>
  );
}
