import UserCard from "./components/UserCard";
import img from "5783.jpg";

function App() {
  return (
    <div>
      <UserCard img={img} nom="ronaldo" prenom="cr7" email="cr7@gmail.com" />
    </div>
  );
}

export default App;
