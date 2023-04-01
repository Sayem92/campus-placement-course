import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Time = () => {
  const [remainingTime, setRemainingTime] = useState(
    localStorage.getItem("remainingTime") || 15 * 60 // 15 minutes in seconds
  );

  useEffect(() => {
    localStorage.setItem("remainingTime", remainingTime);
  }, [remainingTime]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => (prevTime > 0 ? prevTime - 1 : prevTime));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;

  const navigate = useNavigate();

  useEffect(() => {
    if (remainingTime === 0) {
      alert("Time's up!");
      navigate("/result");
    }
  }, [remainingTime, navigate]);

  return (
    <div>
      <div className="text-2xl font-bold text-gray-500 text-center space-y-4 my-4">
        <h3>Time Left</h3>
        <p>
          {hours.toString().padStart(2, "0")} :{" "}
          {minutes.toString().padStart(2, "0")} :{" "}
          {seconds.toString().padStart(2, "0")}
        </p>
      </div>
    </div>
  );
};

export default Time;
