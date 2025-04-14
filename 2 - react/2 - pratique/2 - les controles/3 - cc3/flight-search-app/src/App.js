import { Provider } from "react-redux";
import { store } from "./redux/store";
import SearchBar from "./components/SearchBar";
import FlightsList from "./components/FlightsList";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Flight Search</h1>
        <SearchBar />
        <FlightsList />
      </div>
    </Provider>
  );
};

export default App;
