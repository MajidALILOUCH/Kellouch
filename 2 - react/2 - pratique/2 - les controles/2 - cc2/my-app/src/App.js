import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import AjouterPreference from "./pages/AjouterPreference";
import Liste from "./pages/Liste";

function App() {
  const [preferences, setPreferences] = useState([]);

  const addPreference = (preference) => {
    setPreferences([...preferences, preference]);
  };

  const deletePreference = (index) => {
    const updatedPreferences = preferences.filter((_, i) => i !== index);
    setPreferences(updatedPreferences);
  };

  return (
    <div>
      <Navigation />
      <Routes>
        <Route
          path="/ajouter"
          element={<AjouterPreference addPreference={addPreference} />}
        />
        <Route
          path="/liste"
          element={
            <Liste
              preferences={preferences}
              deletePreference={deletePreference}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
