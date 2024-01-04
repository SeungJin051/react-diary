import "./App.css";
import MyFooter from "./components/MyFooter";
import MyHeader from "./components/MyHeader";

function App() {
  let name = "임승진  ";
  const number = 5;
  return (
    <div className="App">
      <MyHeader />
      <h2
        style={{
          backgroundColor: "red",
        }}
      >
        Hello react {name}
      </h2>
      <b id="bold_text">
        {number}는 : {number % 2 === 0 ? "짝" : "홀"}
      </b>
      <MyFooter />
    </div>
  );
}

export default App;
