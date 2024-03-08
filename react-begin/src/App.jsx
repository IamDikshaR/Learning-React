import { useState } from "react";
import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hello message="Hey there!" name="Diksha" />
      <Fruits />
      <Counter />
    </>
  );
}

export default App;
