const moment = require('moment');
const Booking = require('../../models/booking');

add = async (bookingData, res) => {
  const booking = new Booking(bookingData);
  booking.user = res.locals.user;
  if (!_checkIfBookingDatesAreValid(booking))
    return res.sendApiError({
      title: 'Invalid Booking',
      detail: 'Dates are Invalid!',
    });
  try {
    const rentalBookings = await Booking.find({ rental: booking.rental });
    const isValid = _checkIfBookingIsValid(booking, rentalBookings);
    if (isValid) {
      const savedBooking = await booking.save();
      return res.json(savedBooking);
    } else
      return res.sendApiError({
        title: 'Invalid Booking',
        detail: 'Choosen dates already taken!',
      });
  } catch (error) {
    return res.mongoError(error);
  }
};

_checkIfBookingDatesAreValid = (booking) => {
  let isValid = true;
  if (!booking.startAt || !booking.endAt) isValid = false;
  if (moment(booking.startAt) > moment(booking.endAt)) isValid = false;
  return isValid;
};

_checkIfBookingIsValid = (pendingBooking, rentalBookings) => {
  let isValid = true;
  if (rentalBookings && rentalBookings.length > 0) {
    isValid = rentalBookings.every((booking) => {
      const pendingStart = moment(pendingBooking.startAt);
      const pendingEnd = moment(pendingBooking.endAt);
      const bookingStart = moment(booking.startAt);
      const bookingEnd = moment(booking.endAt);
      return (
        (bookingStart < pendingStart && bookingEnd < pendingStart) ||
        (pendingEnd < bookingEnd && pendingEnd < bookingStart)
      );
    });
  }
  return isValid;
};

module.exports = {
  add,
};
