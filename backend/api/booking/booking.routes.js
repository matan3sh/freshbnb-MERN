const express = require('express');
const {
  getBookings,
  getBooking,
  addBooking,
  deleteBooking,
  updateBooking,
} = require('./booking.controller');
const auth = require('../../middlewares/auth');
const router = express.Router();

router.post('/', auth, addBooking);
// router.get('/', getBookings);
// router.get('/:id', getBooking);
// router.put('/:id', updateBooking);
// router.delete('/:id', deleteBooking);

module.exports = router;
