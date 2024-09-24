/* import "./App.css"; */

import { useEffect } from "react";
import simulatePromiseWithJson from "./services/json/apiRes";

function App() {
  useEffect(() => {
    simulatePromiseWithJson(true)
      .then((data) => {
        console.log("Resolved JSON Object:", data);
      })
      .catch((error) => {
        console.log("Error:", error.message);
      });
  }, []);

  return (
    <div>
      <h1>Shopping web app</h1>
    </div>
  );
}

export default App;
