const express = require('express');
const {
  getRentals,
  getRental,
  addRental,
  deleteRental,
  updateRental,
} = require('./rental.controller');
const router = express.Router();

router.get('/', getRentals);
router.get('/:id', getRental);
router.post('/', addRental);
router.put('/:id', updateRental);
router.delete('/:id', deleteRental);

module.exports = router;
