import { useState } from "react";
import "./App.css";
import { Button } from "./components";
function App() {
  const [count, setCount] = useState(0);
  const [persona, setPersona] = useState({
    name: "John",
    surname: "Doe",
  });
  const changePersona = () => {
    setPersona({
      ...persona,
      name: "Armando",
      surname: "Rodriguez",
    });
  };
  const countMore = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };
  return (
    <div className="container mx-auto px-4 mt-4">
      <h1 className="text-3xl">Hola React</h1>
      <div className="flex flex-col">
        <Button label={`Count is ${count}`} onClick={countMore} />
        <Button label="Change name" onClick={changePersona} />
      </div>
      <p>
        {persona.name} {persona.surname}
      </p>
    </div>
  );
}
export default App;
