"use client";
import React, { useEffect, useState } from "react";
import "./styles.css"; // Make sure to create a CSS file with the necessary styles
import FlipCountdown from "@rumess/react-flip-countdown";
import moment from "moment";
import GreetingMessage from "./GreetingMessage";

const CountdownTimer = () => {
  const startDate = moment().valueOf();
  const endDate = moment("2023-11-17 00:00:00").valueOf();

  const [remainingTime, setRemainingTime] = useState(endDate - startDate); //endDate - startDate
  const [isLoading, setIsLoading] = useState(true);

  console.log(remainingTime, 'remaining time')

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime((prev) => prev - 1000);
      }
    }, 1000);
    if (remainingTime <= 0) {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
    return () => clearInterval(timerInterval);
  }, [remainingTime]);

  return (
    <div className="bg-[#1F1D2A] wrapper p-6">
      <div
        // style={{ backgroundImage: `url(${bg})` }}
        className="h-[75vh] bg-cover flex justify-center items-center p-3"
      >
        {remainingTime > 0 ? (
          <div
            className="font-bold text-white tracking-widest text-center w-100 flex justify-center items-center"
            style={{ fontFamily: "'Red Hat Text', sans-serif" }}
          >
            <div className="text=[#8486A9]">
              <FlipCountdown
                hideYear
                hideMonth
                theme="dark"
                size="large"
                titlePosition="bottom"
                endAt={"2023-11-17 00:00:00"}
                dayTitle="DAYS"
                hourTitle="HOURS"
                minuteTitle="MINUTES"
                secondTitle="SECONDS"
              />
            </div>
          </div>
        ) : isLoading ? (
          <div className="loading-animation">
           <span className="loader"></span>
          </div>
        ) : (
          <GreetingMessage />
        )}
      </div>
    </div>
  );
};

export default CountdownTimer;
