const express = require('express');
const { addBooking } = require('./booking.controller');

const auth = require('../../middlewares/auth');
const { isUserRentalOwner } = require('../../middlewares/rental');

const router = express.Router();

router.get('/', getBookings);
router.post('/', auth, isUserRentalOwner, addBooking);

module.exports = router;
