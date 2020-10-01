const Rental = require('../models/rental');

exports.isUserRentalOwner = (req, res, next) => {
  const { rental } = req.body;
  const user = res.locals.user;
  Rental.findById(rental)
    .populate('owner')
    .exec((error, foundRental) => {
      if (error) return res.mongoError(error);
      if (foundRental.owner.id === user.id)
        return res.sendApiError({
          title: 'Create Booking Error!',
          detail: 'Cannot Book in Your Own Rental',
        });
      next();
    });
};
