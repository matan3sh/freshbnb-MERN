const User = require('../../models/user');

query = async (res) => {
  return;
  // await Rental.find({}, (error, foundRentals) => {
  //   if (error)
  //     return Rental.sendError(res, {
  //       status: 422,
  //       detail: 'Cannot retrive rentals data!',
  //     });
  //   res.json(foundRentals);
  // });
};

getById = async (id, res) => {
  return;
  // await Rental.findById(id, (error, foundRental) => {
  //   if (error)
  //     return Rental.sendError(res, {
  //       status: 422,
  //       detail: 'Cannot retrive rental data!',
  //     });
  //   res.json(foundRental);
  // });
};

add = async (rental, res) => {
  return;
  // await Rental.create(rental, (error, createdRental) => {
  //   if (error)
  //     return Rental.sendError(res, {
  //       status: 422,
  //       detail: `Rental ${rental.title} can't be added`,
  //     });
  //   res.json(createdRental);
  // });
};

module.exports = {
  query,
  getById,
  add,
};
