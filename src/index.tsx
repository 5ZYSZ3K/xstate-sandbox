import * as React from "react";
import { useMachine } from "@xstate/react";
import { render } from "react-dom";
import { parentMachine } from "./machine";

import "./styles.css";

function App() {
  const [current, send] = useMachine(parentMachine);
  return (
    <div className="App">
      <div>Current State: {current.value}</div>
      <div>Event Type: {current.event.type}</div>
      <pre>
        History of State: {JSON.stringify(current.history, undefined, 2)}
      </pre>
      <div>Next Event: {current.nextEvents}</div>

      <button onClick={() => send("PREV")}>PREV</button>
      <button onClick={() => send("NEXT")}>NEXT</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
