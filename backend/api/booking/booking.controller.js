const bookingService = require('./booking.service');

addBooking = async (req, res) => await bookingService.add(req.body, res);

module.exports = {
  addBooking,
};
