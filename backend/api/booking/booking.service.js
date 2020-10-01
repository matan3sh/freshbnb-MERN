const Booking = require('../../models/booking');

// query = async (res) => {
//   await Rental.find({}, (error, foundRentals) => {
//     if (error)
//       return Rental.sendError(res, {
//         status: 422,
//         detail: 'Cannot retrive rentals data!',
//       });
//     res.json(foundRentals);
//   });
// };

// getById = async (id, res) => {
//   await Rental.findById(id, (error, foundRental) => {
//     if (error)
//       return Rental.sendError(res, {
//         status: 422,
//         detail: 'Cannot retrive rental data!',
//       });
//     res.json(foundRental);
//   });
// };

add = async (booking, res) => {
  // rental.owner = res.locals.user;
  // await Rental.create(rental, (error, createdRental) => {
  //   if (error)
  //     return Rental.sendError(res, {
  //       status: 422,
  //       detail: `Rental ${rental.title} can't be added`,
  //     });
  //   res.json(createdRental);
  // });
  return res.json({ message: 'Booking is Created!' });
};

module.exports = {
  // query,
  // getById,
  add,
};
