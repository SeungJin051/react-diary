import { useState } from "react";

export default function Input() {
  const [text, setText] = useState("");
  const [birth, setBirth] = useState("");
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };
  const onChangeBio = (e) => {
    setBio(e.target.value);
  };

  return (
    <div>
      <div>
        <input type="text" value={text} onChange={onChangeText} />
      </div>
      <div>
        <input onChange={onChangeBirth} type="date" value={birth} />
      </div>
      <div>
        <select value={country} onChange={onChangeCountry}>
          <option value=""></option>
          <option>한국</option>
          <option>미국</option>
          <option>캐나다</option>
        </select>
      </div>
      <div>
        <textarea value={bio} onChange={onChangeBio} />
      </div>
      {bio}
    </div>
  );
}
