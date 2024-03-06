import { useState } from "react";
import Hello from "./components/Hello";
import Fruits from "./components/Fruits";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hello message="Hey there!" name="Diksha" />
      <Fruits />
    </>
  );
}

export default App;
