import React, { useEffect, useState } from "react";
import "../css/Count.css";
import { TbMathXMinusY } from "react-icons/tb";
function Coutdown() {
  const [Countdown, setCountdown] = useState({
    Days: "000",
    Hours: "00",
    Minutes: "00",
    Seconds: "00",
  });

  const destDate = new Date("2024-11-03T00:00:00"); // Adding time component for more accurate calculations

  function getRemDays() {
    const today = new Date();

    // Difference in time (milliseconds)
    const timeDifference = destDate.getTime() - today.getTime();

    // Calculate remaining days, hours, minutes, and seconds
    const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursRemaining = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutesRemaining = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const secondsRemaining = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      Days: daysRemaining.toString().padStart(3,0),
      Minutes: minutesRemaining.toString().padStart(2,0),
      Hours: hoursRemaining.toString().padStart(2,0),
      Seconds: secondsRemaining.toString().padStart(2,0),
    };
  }
  useEffect(() => {
    const interval = setInterval(() => {
        setCountdown(getRemDays())
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countContainer">
      <h1 className="attending">Are You Attending ?</h1>
      <div className="counter">
        <div className="wrapCount">
          <span className="count">{Countdown.Days}</span>
          <span>Days</span>
        </div>
        <div className="wrapCount">
          <span className="count">{Countdown.Hours}</span>
          <span>Hours</span>
        </div>
        <div className="wrapCount">
          <span className="count">{Countdown.Minutes}</span>
          <span>Minutes</span>
        </div>
        <div className="wrapCount">
          <span className="count">{Countdown.Seconds}</span>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
}

export default Coutdown;
