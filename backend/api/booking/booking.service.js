const Booking = require('../../models/booking');

add = async (bookingData, res) => {
  const booking = new Booking(bookingData);
  booking.user = res.locals.user;
  Booking.find({ rental: booking.rental }, (error, rentalBookings) => {
    if (error) return res.mongoError(error);
    const isValid = _checkIfBookingIsValid(booking, rentalBookings);
    if (isValid) {
      booking.save((error, savedBooking) => {
        if (error) return res.mongoError(error);
        return res.json({
          startAt: savedBooking.startAt,
          endAt: savedBooking.endAt,
        });
      });
    } else return res.json({ message: 'Booking is NOT Created!' });
  });
};

_checkIfBookingIsValid = (booking, rentalBookings) => {
  return true;
};

module.exports = {
  add,
};
