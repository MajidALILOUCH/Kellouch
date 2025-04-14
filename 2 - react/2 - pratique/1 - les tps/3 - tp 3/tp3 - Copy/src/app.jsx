import UserCard from "./components/UserCard";
import {livres} from livres.js;
import UserCard from "./components/UserCard";

function App() {
  return (
    <div>
      {livres.map((livre, index) => {
        <UserCard titre={livre.titre} prix={livre.prix} url={livre.url} key={index} />
      })}
    </div>
  );
}

export default App;
