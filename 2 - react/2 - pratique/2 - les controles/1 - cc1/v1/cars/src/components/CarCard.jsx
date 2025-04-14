import './CarCard.css';
// Les différentes className sont optionnelles  
function CarCard({ car }) {
  return (
    <div className="car-card">
      <div className="car-image">
        <img src={car.image} alt={`${car.brand} ${car.model}`} />
      </div>
      <div className="car-details">
        <h2>{car.brand} {car.model}</h2>
        <div className="car-info">
          <span className="price">{car.price.toLocaleString()}DH</span>
          <span className="mileage">{car.mileage}</span>
        </div>
        <button className="details-btn">Voir les détails</button>
      </div>
    </div>
  );
}

export default CarCard;
