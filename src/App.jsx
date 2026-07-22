import { useState, useEffect } from "react";
import Header from "./components/Header";
import LocationCard from "./components/LocationCard";

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

  const fakeIPs = [
    {
      ip: "2405:4803:ccc5:470:a136:b7a:b11:3d46",
      country: "Viet Nam",
      cc: "VN",
    },
    {
      ip: "2402:800:63b2:7f10:7c9e:84d2:fe91:2b5a",
      country: "Singapore",
      cc: "SG",
    },
    {
      ip: "2404:6800:4008:c15:8d3f:ac91:4b72:91ef",
      country: "Japan",
      cc: "JP",
    },
    {
      ip: "2606:4700:8d2f:4d10:f821:9e3b:2f6a:c0d4",
      country: "United States",
      cc: "US",
    },
    {
      ip: "2a02:6b8:c08:6e21:91f3:5a1d:be7c:8f12",
      country: "Germany",
      cc: "DE",
    },
  ];

  function randomMode() {
    const randomIndex = Math.floor(Math.random() * fakeIPs.length);
    setData(fakeIPs[randomIndex]);
  }

  return (
    <div className="app">
      <Header />

      <button onClick={randomMode}>
        Random Mode
      </button>

      <LocationCard data={data} />
    </div>
  );
}

export default App;