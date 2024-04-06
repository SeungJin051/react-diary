import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Even from "./components/Even";
import Viewer from "./components/Viewer";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // 컴퍼넌트 업데이트 단계에서만 코드를 실행하고 싶다면 래퍼런스 객체 생성 후 플래그로써 활용
  const isMount = useRef(false);

  // React 라이프 사이클
  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log("마운트");
  }, []);
  // 2. 업데이트 : 리렌더링
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });
  // 3. 언마운트 : 죽음

  const onClickButton = (value) => {
    setCount(count + value);
  };
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
        {count % 2 == 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
    </div>
  );
}

export default App;
