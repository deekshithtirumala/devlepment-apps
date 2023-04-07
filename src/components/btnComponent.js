import React, { useState } from "react";

export default function BtnComponent(props) {
  const [start, setStart] = useState("Start");
  const change = () => {
    if (start === "Start") {
      props.start();
      setStart("Stop");
    } else if (start === "Stop") {
      props.stop();
      setStart("Resume");
    } else {
      props.start();
      setStart("Stop");
    }
  };
  const reset = () => {
    props.stop();
    props.reset();
    setStart("Start");
  };
  return (
    <div className="buttons">
      <button onClick={reset}>Reset</button>
      <button onClick={change}>{start}</button>
    </div>
  );
}
