// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDOM from "react-dom/client";
import JeuDe from "./components/JeuDe";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

// eslint-disable-next-line react-refresh/only-export-components
function App() {
  return (
    <div>
      <JeuDe cache={2} />
    </div>
  );
}

root.render(<App />);
