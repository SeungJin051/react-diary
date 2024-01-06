import { useState } from "react";

export default function DiaryEditor() {
  // useState 훅을 사용하여 컴포넌트의 상태를 초기화합니다.
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  // 입력값이 변경될 때 호출되는 핸들러 함수를 정의합니다.
  const handleChangeState = (e) => {
    // console.log(e.target.name); // 현재 입력 필드의 이름을 콘솔에 출력
    // console.log(e.target.value); // 현재 입력 필드의 값(입력 내용)을 콘솔에 출력

    // 기존 상태를 복사하고, 변경된 값을 새로운 상태로 업데이트합니다.
    // [e.target.name]: e.target.value: 이 부분은 ES6에서 도입된 "계산된 속성명"이라는 문법을 사용합니다.
    // 이는 코드 실행 중에 속성의 이름을 동적으로 설정할 수 있게 해줍니다.
    // e.target.name: 이 부분은 이벤트가 발생한 요소의 name 속성을 나타냅니다. 주로 입력 필드에서 사용되는 속성입니다.
    // e.target.value: 이 부분은 이벤트가 발생한 요소의 값, 즉 사용자가 입력한 값입니다.
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(state);
    alert("저장 성공");
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          name="author"
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          name="content"
          value={state.contnet}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <span>오늘의 감정점수 : </span>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>

          <option value={2}>2</option>

          <option value={3}>3</option>

          <option value={4}>4</option>

          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
}
