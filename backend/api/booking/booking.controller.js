const bookingService = require('./booking.service');

getBookings = async (req, res) =>
  await bookingService.query(req.query.rental, res);

addBooking = async (req, res) => await bookingService.add(req.body, res);

module.exports = {
  addBooking,
  getBookings,
};
