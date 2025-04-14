import "./App.css";
import CarList from "./components/CarList";
import carsData from "./data/cars.json";

function App() {
  return (
    <div className="App">
      <main>
        <CarList cars={carsData.cars} />
      </main>
    </div>
  );
}

export default App;
