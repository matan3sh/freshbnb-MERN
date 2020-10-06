const Rental = require('../../models/rental');

query = async (city, res) => {
  const criteria = city ? { city: city.toLowerCase() } : {};
  try {
    const rentals = await Rental.find(criteria);
    return res.json(rentals);
  } catch (error) {
    return res.mongoError(error);
  }
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

getByUser = async (res) => {
  const { user } = res.locals;
  try {
    const rentals = await Rental.find({ owner: user.id });
    return res.json(rentals);
  } catch (error) {
    return res.mongoError(error);
  }
};

module.exports = {
  query,
  getById,
  getByUser,
  add,
};
