export default function OddEvenResult({ count }) {
  console.log("랜더");

  return (
    <>
      <div>{count % 2 === 0 ? "짝" : "홀"}</div>
    </>
  );
}
