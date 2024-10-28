import { useEffect, useState } from "react";
import "./App.css";
import { User } from "./models/user.model";
function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setData(await response.json());
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 mt-4">
      <h1 className="text-3xl mb-4">Hola React</h1>
      {data.map((user: User) => (
        <div key={user.id}>
          <h1 className="text-xl">{user.name}</h1>
          <p>{user.email}</p>
          <h3>{user.website}</h3>
          <br />
        </div>
      ))}
    </div>
  );
}
export default App;
