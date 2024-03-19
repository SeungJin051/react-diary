import useInput from "../hooks/useInput";

export default function HookExam() {
  const [input, onChange] = useInput();
  const [input1, onChange1] = useInput();

  console.log("Input 1:", input);
  console.log("Input 2:", input1);

  return (
    <div>
      <input value={input} onChange={onChange} />
      <input value={input1} onChange={onChange1} />
    </div>
  );
}
