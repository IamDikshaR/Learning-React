import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [increamentBy, setIncreamentBy] = useState(1);
  function Increament() {
    setCount(count + increamentBy);
  }
  function Decreament() {
    setCount(count - increamentBy);
  }
  function changeIncreament() {
    setIncreamentBy(increamentBy + 1);
  }
  function changeDecreament() {
    setIncreamentBy(increamentBy - 1);
  }
  return (
    <>
      <h1>Count is: {count}</h1>
      <button onClick={Increament}>Increament +</button>
      <button onClick={Decreament}>Decreament -</button>
      <h3>Increament value is : {increamentBy}</h3>
      <button onClick={changeIncreament}>Increase increament value </button>
      <button onClick={changeDecreament}>Decrease increament value </button>
    </>
  );
}
