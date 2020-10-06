const express = require('express');
const {
  addBooking,
  getBookings,
  getUserBookings,
} = require('./booking.controller');

const auth = require('../../middlewares/auth');
const { isUserRentalOwner } = require('../../middlewares/rental');

const router = express.Router();

router.get('/', getBookings);
router.get('/me', auth, getUserBookings);

router.post('/', auth, isUserRentalOwner, addBooking);

module.exports = router;
