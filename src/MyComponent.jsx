import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("Beto");
  };

  const increment = () => {
    setAge(age + 1);
  };

  const ToggleStatus = () => {
    setIsEmployed(!isEmployed);
  };
  return (
    <>
      <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>
        <p>Age: {age}</p>
        <button onClick={increment}>Set Name</button>
        <p>is Employed: {isEmployed ? "Yes" : "NO"}</p>
        <button onClick={ToggleStatus}>Set Status</button>
      </div>
    </>
  );
}
export default MyComponent;
