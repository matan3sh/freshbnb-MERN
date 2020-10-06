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

router.post('/', auth, addRental);
router.put('/:id', updateRental);
router.delete('/:id', deleteRental);

module.exports = router;
