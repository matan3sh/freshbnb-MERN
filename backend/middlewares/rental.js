const Rental = require('../models/rental');

exports.isUserRentalOwner = (req, res, next) => {
  const { rental } = req.body;
  const user = res.locals.user;

  if (!rental) {
    return res.sendApiError({
      title: 'Booking Error',
      detail: 'Cannot create booking to undefined rental',
    });
  }

  Rental.findById(rental)
    .populate('owner')
    .exec((error, foundRental) => {
      if (error) {
        return res.mongoError(error);
      }

      if (foundRental.owner.id === user.id) {
        return res.sendApiError({
          title: 'Invalid User',
          detail: 'Cannot create booking on your rental',
        });
      }

      next();
    });
};
