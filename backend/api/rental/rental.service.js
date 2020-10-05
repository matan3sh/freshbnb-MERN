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
  try {
    const rental = await Rental.findById(id).populate(
      'owner',
      '-password -_id'
    );
    res.json(rental);
  } catch (error) {
    return res.mongoError(error);
  }
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
