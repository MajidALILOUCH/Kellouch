import React from "react";
import FormulairePreferences from "../components/FormulairePreferences";

function AjouterPreference({ addPreference }) {
  return (
    <div>
      <h2>Ajouter une Préférence</h2>
      <FormulairePreferences addPreference={addPreference} />
    </div>
  );
}

export default AjouterPreference;
