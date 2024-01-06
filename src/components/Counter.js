import { useState } from "react";
import OddEvenResult from "./OddEvenResult";

export default function Counter({ initValue }) {
  const [count, setCount] = useState(initValue);

  const upCount = () => {
    setCount(count + 1);
  };

  const downCount = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h2>useState 카운트 : {count}</h2>
      <button onClick={upCount}>+</button>
      <button onClick={downCount}>-</button>
      <OddEvenResult count={count} />
    </div>
  );
}

Counter.defaultProps = {
  initValue: 0,
};
