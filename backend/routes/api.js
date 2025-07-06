const express = require('express');
const fs = require('fs');
const router = express.Router();
const users = require('../usersStore');
const authenticate = require('../middleware/auth');

//
// 🌿 Растения
//
router.get('/plants', (req, res) => {
  try {
    const db = JSON.parse(fs.readFileSync('db.json', 'utf-8'));
    res.json(db.plants);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при загрузке растений' });
  }
});

router.get('/plants/:id', (req, res) => {
  try {
    const db = JSON.parse(fs.readFileSync('db.json', 'utf-8'));
    const plant = db.plants.find(p => p.id === parseInt(req.params.id));
    if (!plant) return res.status(404).json({ message: 'Растение не найдено' });
    res.json(plant);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при чтении файла' });
  }
});

//
// 👤 Авторизация
//
router.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  const exists = users.find(u => u.email === email);
  if (exists) return res.status(400).json({ message: 'Такой пользователь уже существует' });

  const newUser = {
    id: Date.now(),
    name,
    email,
    password,
    cart: []
  };

  users.push(newUser);
  res.status(201).json({ id: newUser.id, name: newUser.name, token: `${newUser.id}` });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return res.status(401).json({ message: 'Неверные данные' });

  res.json({ id: user.id, name: user.name, token: `${user.id}` });
});

//
// 🛒 Корзина
//
router.get('/cart', authenticate, (req, res) => {
  res.json(req.user.cart || []);
});

router.post('/cart', authenticate, (req, res) => {
  const { productId, quantity } = req.body;
  const item = req.user.cart.find(i => i.productId === productId);
  if (item) {
    item.quantity += quantity;
  } else {
    req.user.cart.push({ productId, quantity });
  }
  res.status(201).json({ message: 'Товар добавлен в корзину', cart: req.user.cart });
});

router.delete('/cart', authenticate, (req, res) => {
  req.user.cart = [];
  res.json({ message: 'Корзина очищена' });
});

module.exports = router;