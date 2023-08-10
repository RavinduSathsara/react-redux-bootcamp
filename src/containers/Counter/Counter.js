import React, { useState } from "react";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        setCounter((prevCounter) => prevCounter + 1);
        break;
      case "dec":
        setCounter((prevCounter) => prevCounter - 1);
        break;
      case "add":
        setCounter((prevCounter) => prevCounter + value);
        break;
      case "sub":
        setCounter((prevCounter) => prevCounter - value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <CounterOutput value={counter} />
      <CounterControl
        label="Increment"
        clicked={() => counterChangedHandler("inc")}
      />
      <CounterControl
        label="Decrement"
        clicked={() => counterChangedHandler("dec")}
      />
      <CounterControl
        label="Add 5"
        clicked={() => counterChangedHandler("add", 5)}
      />
      <CounterControl
        label="Subtract 5"
        clicked={() => counterChangedHandler("sub", 5)}
      />
    </div>
  );
};

export default Counter;
