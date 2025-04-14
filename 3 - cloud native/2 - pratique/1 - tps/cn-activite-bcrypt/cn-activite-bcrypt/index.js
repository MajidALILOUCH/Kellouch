import express from 'express';
import bcrypt from 'bcrypt';

const app = express();
app.use(express.json());

// Stockage en mémoire (à remplacer par une base de données)
const users = [];

// Enregistrez un nouvel utilisateur
app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        
        // Générer du sel (salt)
        const salt = await bcrypt.genSalt(10);
        
        // Hacher le mot de passe avec le salt généré
        const hashedPassword = await bcrypt.hash(password, salt);
        
        // Stocker le nouvel utilisateur
        users.push({
            username,
            password: hashedPassword
        });
        
        res.status(201).json({ message: 'Utilisateur enregisteré avec succèss' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Itinéraire de connexion
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        
        // Chercher l'utilisateur par nom d'utilisateur
        const user = users.find(u => u.username === username);
        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }
        
        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        
        if (isMatch) {
            res.json({ message: 'Connexion réussie' });
        } else {
            res.status(401).json({ message: 'Invalid password' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Exemple d'itinéraire pour démontrer le hachage direct
app.post('/hash', async (req, res) => {
    try {
        const { password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        res.json({ hashedPassword });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
