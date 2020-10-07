const express = require('express');
const {
  getRentals,
  getRental,
  addRental,
  deleteRental,
  updateRental,
  getUserRentals,
} = require('./rental.controller');
const auth = require('../../middlewares/auth');
const router = express.Router();

router.get('/', getRentals);
router.get('/me', auth, getUserRentals);
router.get('/:id', getRental);

router.delete('/:id', auth, deleteRental);
router.post('/', auth, addRental);
router.patch('/:id', auth, updateRental);

module.exports = router;
