import React from "react";

function ListePreferences({ preferences, deletePreference }) {
  return (
    <div>
      <ul>
        {preferences.map((preference, index) => (
          <li key={index}>
            <strong>{preference.name}</strong> - {preference.theme}
            <p>{preference.remark}</p>
            <button onClick={() => deletePreference(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <p>Total: {preferences.length} préférences</p>
    </div>
  );
}

export default ListePreferences;
