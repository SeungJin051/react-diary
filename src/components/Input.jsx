import { useState, useRef } from "react";

export default function Input() {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const onSubmit = () => {
    if (input.name == "") {
      // 이름을 입력해주세요
      inputRef.current.focus();
    }
  };

  const countRef = useRef(0);
  const inputRef = useRef();

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    // 객체를 만들어서 전달
    setInput({
      // 기존의 Input의 값을 유지
      ...input,
      // JS obj 새로운 객체를 만들면서 | 키 : 값 설정
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <div>
        <input
          // 돔요소가 inputRef에 저장
          ref={inputRef}
          name="name"
          type="text"
          value={input.text}
          onChange={onChange}
        />
      </div>
      <div>
        <input
          name="birth"
          onChange={onChange}
          type="date"
          value={input.birth}
        />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option>한국</option>
          <option>미국</option>
          <option>캐나다</option>
        </select>
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  );
}
