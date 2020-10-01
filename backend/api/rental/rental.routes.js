const express = require('express');
const {
  getRentals,
  getRental,
  addRental,
  deleteRental,
  updateRental,
} = require('./rental.controller');
const auth = require('../../middlewares/auth');
const router = express.Router();

router.get('/', getRentals);
router.get('/:id', getRental);
router.post('/', auth, addRental);
router.put('/:id', updateRental);
router.delete('/:id', deleteRental);

module.exports = router;
