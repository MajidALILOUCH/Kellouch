import React, { useState } from "react";

function FormulairePreferences({ addPreference }) {
  const [formData, setFormData] = useState({
    name: "",
    theme: "Clair",
    remark: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name) {
      alert("Le nom est obligatoire.");
      return;
    }
    if (formData.remark.length < 50) {
      alert("La remarque doit avoir au moins 50 caractères.");
      return;
    }
    addPreference(formData);
    setFormData({ name: "", theme: "Clair", remark: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nom complet:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Thème:</label>
        <select name="theme" value={formData.theme} onChange={handleChange}>
          <option value="Clair">Clair</option>
          <option value="Sombre">Sombre</option>
        </select>
      </div>
      <div>
        <label>Remarque:</label>
        <textarea
          name="remark"
          value={formData.remark}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default FormulairePreferences;
