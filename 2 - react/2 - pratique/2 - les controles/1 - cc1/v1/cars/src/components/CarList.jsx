import CarCard from './CarCard';
import './CarList.css';

function CarList({ cars }) {
  return (
    <div className="car-list-container">
      <h1>Nos Véhicules Premium</h1>
      <div className="car-list">
        {cars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}

export default CarList;
