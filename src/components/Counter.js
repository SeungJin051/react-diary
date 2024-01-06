import { useState } from "react";

export default function Counter() {
  // 0 -> +1 And -1  State
  //  State가 바뀌면 리랜더
  console.log("카운터 호출");
  const [count, setCount] = useState(0);

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
    </div>
  );
}
