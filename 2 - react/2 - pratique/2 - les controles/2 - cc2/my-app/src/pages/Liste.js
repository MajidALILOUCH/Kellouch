import React from "react";
import ListePreferences from "../components/ListePreferences";

function Liste({ preferences, deletePreference }) {
  return (
    <div>
      <h2>Liste des Préférences</h2>
      <ListePreferences
        preferences={preferences}
        deletePreference={deletePreference}
      />
    </div>
  );
}

export default Liste;
