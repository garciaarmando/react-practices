import React, { useState, useEffect } from "react";

function Clock({ hour }) {
  return <h3>{hour}</h3>;
}

export default function RelojHooks() {
  const [hour, setHour] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer;
    if (visible) {
      timer = setInterval(() => {
        setHour(new Date().toLocaleTimeString());
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => {
      console.log("ComponentWillUnmount");
      clearInterval(timer);
    };
  }, [visible]);

  return (
    <>
      <h2>Clock with hooks</h2>
      {visible && <Clock hour={hour} />}
      <button onClick={e => setVisible(true)}>Start</button>
      <button onClick={e => setVisible(false)}>Stop</button>
    </>
  );
}
