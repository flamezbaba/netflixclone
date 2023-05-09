import React from "react";

export default function Customs({ initialCounter }) {
  const [counter, setCounter] = React.useState(initialCounter);
  function increment() {
    
      setCounter((counter) => counter + 1);
    
  }

  function decrement() {
    if (counter > 0) {
    setCounter((counter) => counter - 1);
    }
  }

  return (
    <div data-cy="test-div">
      <button data-cy="inc" onClick={() => increment()}>
        +
      </button>
      <span data-cy="counter">{counter}</span>
      <button data-cy="dec" onClick={() => decrement()}>
        -
      </button>
    </div>
  );
}
