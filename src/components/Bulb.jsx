import { useState } from "react";

export default function Bulb() {
  const [ligth, setLigth] = useState("OFF");
  console.log(ligth);

  return (
    <div>
      {ligth === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>온</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>오프</h1>
      )}
      <button
        onClick={() => {
          setLigth(ligth === "ON" ? "OFF" : "ON");
        }}
      >
        {ligth === "ON" ? "끄기" : "켜기"}
      </button>
    </div>
  );
}
