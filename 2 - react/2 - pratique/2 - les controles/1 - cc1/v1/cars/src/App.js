import './App.css';
import Header from './components/Header';
import CarList from './components/CarList';
import Footer from './components/Footer';
import carsData from './data/cars.json';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <CarList cars={carsData.cars} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
