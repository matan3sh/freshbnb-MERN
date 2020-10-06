const express = require('express');
const {
  addBooking,
  getBookings,
  getUserBookings,
  getReceviedBookings,
  deleteBooking,
} = require('./booking.controller');

const auth = require('../../middlewares/auth');
const { isUserRentalOwner } = require('../../middlewares/rental');

const router = express.Router();

router.get('/', getBookings);
router.get('/me', auth, getUserBookings);
router.get('/received', auth, getReceviedBookings);

router.post('/', auth, isUserRentalOwner, addBooking);

router.delete('/:id', auth, deleteBooking);

module.exports = router;
