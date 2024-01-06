import "./App.css";
import Container from "./components/Container";
import Counter from "./components/Counter";
import MyFooter from "./components/MyFooter";
import MyHeader from "./components/MyHeader";

function App() {
  const conuterProps = {
    a: 1,
  };

  return (
    <Container>
      <MyHeader />
      <Counter {...conuterProps} />
      <MyFooter />
    </Container>
  );
}

export default App;
