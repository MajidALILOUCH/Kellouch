import { useSelector } from "react-redux";

const FlightsList = () => {
  const { flights, loading, error } = useSelector((state) => state.flights);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {flights.length === 0 ? (
        <p>No flights found</p>
      ) : (
        flights.map((flight, index) => (
          <div key={index}>
            <h3>{flight.localizedName}</h3>
            <p>Location: {flight.entityType}</p>
            <p>ID: {flight.entityId}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FlightsList;
