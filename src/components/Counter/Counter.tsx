import React, { FC } from "react";
import "./Counter.css";

interface CounterProps {
  count: number;
  handleIncrement?: () => void;
  handleDecrement?: () => void;
}

const Counter: FC<CounterProps> = (props: CounterProps) => (
  <div className="Counter" data-testid="Counter">
    <h1>Counter Component</h1>
    <p data-testid="Counter::count">{props.count}</p>
    {props.handleIncrement && (
      <button data-testid="Counter::handleIncrement" onClick={props.handleIncrement}>Increment</button>
    )}
    {props.handleDecrement && (
      <button data-testid="Counter::handleDecrement" onClick={props.handleDecrement}>Decrement</button>
    )}
  </div>
);

export default Counter;
