const bookingService = require('./booking.service');

getBookings = async (req, res) =>
  await bookingService.query(req.query.rental, res);

addBooking = async (req, res) => await bookingService.add(req.body, res);

getUserBookings = async (req, res) => await bookingService.getByUser(res);

getReceviedBookings = async (req, res) =>
  await bookingService.getPendingBookings(res);

deleteBooking = async (req, res) =>
  await bookingService.remove(req.params.id, res);

module.exports = {
  addBooking,
  getBookings,
  getUserBookings,
  getReceviedBookings,
  deleteBooking,
};
