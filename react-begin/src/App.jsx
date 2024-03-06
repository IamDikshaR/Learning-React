import { useState } from "react";
import Hello from "./components/Hello";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hello message="Hey there!" name="Diksha" />
    </>
  );
}

export default App;
