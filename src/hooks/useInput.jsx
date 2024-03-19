import { useState } from "react";

// 3가지 훅 관련 팁
// 1. 함수 컴포넌트, 커스텀 훅은 내부에서만 호출 가능
// 2. 조건문, 반복문으로 호출 불가능
// 3. 커스텀 훅을 직접 만들 수 있다.

// use 접두사로 커스텀 훅 만들기
function useInput() {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };
  return [input, onChange];
}

export default useInput;
