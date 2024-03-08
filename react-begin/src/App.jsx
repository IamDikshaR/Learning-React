import { useState } from "react";
import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import Counter from "./components/Counter";
import Form from "./components/Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hello message="Hey there!" name="Diksha" />
      <Fruits />
      <Counter />
      <div>
        <h1>Creating a form</h1>
      </div>
      <Form />
    </>
  );
}

export default App;
