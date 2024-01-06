import "./App.css";
import Counter from "./components/Counter";
import MyFooter from "./components/MyFooter";
import MyHeader from "./components/MyHeader";

function App() {
  return (
    <div className="App">
      <MyHeader />
      <Counter />
      <MyFooter />
    </div>
  );
}

export default App;
