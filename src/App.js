import "./App.css";
import { useState, useEffect } from "react";
import Card from "./component/Card";
import axios from "axios";

//https://randomuser.me/api/
function App() {
  const [item, setItem] = useState(0);
  const getItem = () => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => setItem(res?.data?.results[0]));
  };
  useEffect(() => getItem(), []);

  return (
    <div className="App">
      <div>
        <Card item={item} />
      </div>
      <div>
        <button onClick={getItem}>Random User</button>
      </div>
    </div>
  );
}

export default App;
