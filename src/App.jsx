import { useState, useEffect } from "react";
import Header from "./components/Header"
import LocationCard from "./components/LocationCard"

function App() {
  const [data, setData] = useState({
    ip: "",
    country: "",
    cc: "",
  });

  useEffect(() => {
    fetch("https://api.miip.my/")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return(
    <div className="app">
      <Header />
      <LocationCard data={data} />
    </div>
  );
}
export default App
