const bookingService = require('./booking.service');

// getBookings = async (req, res) => await bookingService.query(res);

// getBooking = async (req, res) =>
//   await bookingService.getById(req.params.id, res);

addBooking = async (req, res) => await bookingService.add(req.body, res);

// updateBooking = async (req, res) => {
//   const booking = req.body;
//   await bookingService.update(booking);
//   res.send(rental);
// };

// deleteBooking = async (req, res) => {
//   await bookingService.remove(req.params.id);
//   res.end();
// };

module.exports = {
  // getBooking,
  // getBookings,
  addBooking,
  // updateBooking,
  // deleteBooking,
};
