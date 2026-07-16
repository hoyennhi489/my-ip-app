import Header from "./components/Header"
import LocationCard from "./components/LocationCard"

function App() {
  const data = {
    ip: "2a09:bac3:d351:16c8::245:21",
    country: "Viet Nam",
    cc: "VN",
  };

  return(
    <div className="app">
      <Header />
      <LocationCard data={data} />
    </div>
  );
}
export default App
