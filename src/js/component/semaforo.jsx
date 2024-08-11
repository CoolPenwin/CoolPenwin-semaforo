import React, { useState, useEffect } from "react";

const Semaforo = () => {
  const [currentState, setCurrentState] = useState(0); // 0: rojo, 1: amarillo, 2: verde
  const states = ["verde", "amarillo", "rojo"];
  const durations = [10000, 2000, 15000]; // Duraciones en milisegundos

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentState((currentState + 1) % states.length);
    }, durations[currentState]);

    return () => clearTimeout(timer);
  }, [currentState]);

  return (
    <div>
      <div id="semaforo">
        <div
          id="rojo"
          className={`luz ${currentState === 2 ? "active" : ""}`}
        ></div>
        <div
          id="amarillo"
          className={`luz ${currentState === 1 ? "active" : ""}`}
        ></div>
        <div
          id="verde"
          className={`luz ${currentState === 0 ? "active" : ""}`}
        ></div>
      </div>
    </div>
  );
};

export default Semaforo;
