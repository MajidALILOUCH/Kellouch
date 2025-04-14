import { useState } from "react";
import { useDispatch } from "react-redux";
import { getFlights } from "../redux/flightsSlice";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(getFlights(query));
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city or airport"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
