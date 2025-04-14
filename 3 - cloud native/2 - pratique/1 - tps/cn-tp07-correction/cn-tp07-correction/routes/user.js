import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/UserModel.js';

const router = express.Router();

router.get('/login/:login', async (req, res) => {
  try {
    const login = req.params.login;
    const user = await User.findOne({ login });
    if (!user) {
      return res.status(400).json({ message: 'ECHEC' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/all', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/add', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      ...req.body,
      password: hashedPassword
    });
    await user.save();
    res.status(201).json({ message: 'Utilisateur créé avec succès' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/checklogin', async (req, res) => {
  try {
    const { login, password } = req.body;
    const user = await User.findOne({ login });
    if (!user) {
      return res.status(400).json({ message: 'ECHEC' });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    res.json({ message: validPassword ? 'SUCCESS' : 'ECHEC' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/checkemail', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'ECHEC' });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    res.json({ message: validPassword ? 'SUCCESS' : 'ECHEC' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
