const Rental = require('../../models/rental');

query = async (res) => {
  await Rental.find({}, (error, foundRentals) => {
    if (error)
      return Rental.sendError(res, {
        status: 422,
        detail: 'Cannot retrive rentals data!',
      });
    res.json(foundRentals);
  });
};

getById = async (id, res) => {
  await Rental.findById(id, (error, foundRental) => {
    if (error)
      return Rental.sendError(res, {
        status: 422,
        detail: 'Cannot retrive rental data!',
      });
    res.json(foundRental);
  });
};

add = async (rental, res) => {
  rental.owner = res.locals.user;
  await Rental.create(rental, (error, createdRental) => {
    if (error)
      return Rental.sendError(res, {
        status: 422,
        detail: `Rental ${rental.title} can't be added`,
      });
    res.json(createdRental);
  });
};

module.exports = {
  query,
  getById,
  add,
};
