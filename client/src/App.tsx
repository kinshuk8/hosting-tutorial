import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/message")
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
