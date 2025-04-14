const express = require("express");
const fs = require("fs");
const cors = require("cors");
const { v4: uuid } = require("uuid");

const app = express();
app.use(express.json());
app.use(cors());

const DATA_DIR = "./data";
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR);
}

app.post("/produit", (req, res) => {
  const id = uuid();
  const filePath = `${DATA_DIR}/${id}.json`;
  fs.writeFileSync(filePath, JSON.stringify({ id, ...req.body }, null, 2));
  res.status(201).json({ message: "Produit ajouté", id });
});

app.get("/produits/all", (req, res) => {
  const files = fs.readdirSync(DATA_DIR);
  const produits = files.map((file) =>
    JSON.parse(fs.readFileSync(`${DATA_DIR}/${file}`, "utf-8"))
  );
  res.json(produits);
});

// Récupérer un produit par ID
app.get("/produits/id/:id", (req, res) => {
  const filePath = `${DATA_DIR}/${req.params.id}.json`;
  if (!fs.existsSync(filePath))
    return res.status(404).json({ error: "Produit non trouvé" });
  const produit = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  res.json(produit);
});

// Modifier un produit
app.put("/produits/:id", (req, res) => {
  const filePath = `${DATA_DIR}/${req.params.id}.json`;
  if (!fs.existsSync(filePath))
    return res.status(404).json({ error: "Produit non trouvé" });
  const updatedProduct = {
    ...JSON.parse(fs.readFileSync(filePath, "utf-8")),
    ...req.body,
  };
  fs.writeFileSync(filePath, JSON.stringify(updatedProduct, null, 2));
  res.json({ message: "Produit mis à jour" });
});

app.delete("/produits/:id", (req, res) => {
  const filePath = `${DATA_DIR}/${req.params.id}.json`;
  if (!fs.existsSync(filePath))
    return res.status(404).json({ error: "Produit non trouvé" });
  fs.unlinkSync(filePath);
  res.json({ message: "Produit supprimé" });
});

app.listen(3000, () =>
  console.log("Serveur démarré sur http://localhost:3000")
);
