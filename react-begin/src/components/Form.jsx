import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({
    firstName: "First Name",
    lastName: "Last Name",
  });
  function handleSubmit(e) {
    e.preventDefault();
    //submission to some local or cloud storage
    console.log(name);
  }
  return (
    <>
      <form action="">
        <input
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          value={name.firstName}
          type="text"
        />
        <input
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          value={name.lastName}
          type="text"
        />
        <button onClick={(e) => handleSubmit(e)}>Ok</button>
      </form>
    </>
  );
}
