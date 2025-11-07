import { useEffect, useState } from "react";
import "./App.css";

const baseUrl = import.meta.env.VITE_API_BASE;

if (!baseUrl) {
  throw new Error("VITE_API_BASE is not defined");
}

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`${baseUrl}/api/message`)
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => {
        console.error(`Error fetching message: ${error.message}`);
      });
  }, []);

  return (
    <div>
      <h1>Welcome to Hosting Practice</h1>
      <h3>Data: {message}</h3>
    </div>
  );
}

export default App;
