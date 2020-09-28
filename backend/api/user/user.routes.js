const express = require('express');
const {
  login,
  register,
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
} = require('./user.controller');
const router = express.Router();

router.post('/login', login);
router.post('/register', register);

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', addUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
