import React, { useEffect, useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("");
  const colors = ["red", "yellow", "green"];
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setColor((prevColor) => {
          const actualColor = colors.indexOf(prevColor);
          const nextColor = (actualColor + 1) % colors.length;
          return colors[nextColor];
        });
      }, 1000);
    } else if (!isRunning && color !== "") {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, color, colors]);
  const playColor = (selectColor) => {
    setColor(selectColor);
    setIsRunning(false);
  };
  return (
    <div className="row d-flex justify-content-center">
      <div
        className="col-1 bg-black"
        style={{ height: "13vh", width: "7vh" }}
      ></div>
      <div className="row d-flex justify-content-center">
        <div className="col-1 d-flex flex-column justify-content-center bg-black rounded">
          <button
            onClick={() => playColor(colors[0])}
            type="button"
            className={`btn m-3 rounded-circle ${
              color === "red" ? "btn-danger" : "btn-secondary"
            }`}
            style={{ height: "13vh" }}
          ></button>
          <button
            onClick={() => playColor(colors[1])}
            type="button"
            className={`btn m-3 rounded-circle ${
              color === "yellow" ? "btn-warning" : "btn-secondary"
            }`}
            style={{ height: "13vh " }}
          ></button>
          <button
            onClick={() => playColor(colors[2])}
            type="button"
            className={`btn m-3 rounded-circle ${
              color === "green" ? "btn-success" : "btn-secondary"
            }`}
            style={{ height: "13vh " }}
          ></button>
        </div>
      </div>
      <div className=" col-6 d-flex justify-content-center mt-3">
        <button
          onClick={() => setIsRunning(!isRunning)}
          type="button"
          className={isRunning ? "btn btn-danger" : "btn btn-success"}
        >
          {isRunning ? "Detener" : "Iniciar"} Semaforo
        </button>
      </div>
    </div>
  );
};

export default TrafficLight;
