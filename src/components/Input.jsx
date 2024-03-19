import { useState } from "react";

export default function Input() {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const onChange = (e) => {
    console.log(e.target.name, e.target.value);

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
        <input name="name" type="text" value={input.text} onChange={onChange} />
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
    </div>
  );
}
