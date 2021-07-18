import React, { useEffect } from "react";
import { useState } from "react";
import { DATE_OPTIONS } from "../utils/Validation";
export default function ClockComp() {
  const [time, setTime] = useState(new Date(), []);

  useEffect(() => {
    const timeID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timeID);
    };
  });
  function tick() {
    setTime(new Date());
  }
  return (
    <div className="clock">
      <h1 className="clock__time">{time.toLocaleTimeString()}</h1>
      <h1 className="clock__date">{time.toLocaleDateString("en-US", DATE_OPTIONS)}</h1>
    </div>
  );
}
