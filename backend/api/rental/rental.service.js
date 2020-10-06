const Booking = require('../../models/booking');
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

remove = async (rentalId, res) => {
  const { user } = res.locals;
  try {
    const rental = await Rental.findById(rentalId).populate('owner');
    const bookings = await Booking.find({ rental });

    if (user.id !== rental.owner.id) {
      return res.sendApiError({
        title: 'Invalid User',
        detail: 'You are not owner of this rental!',
      });
    }

    if (bookings && bookings.length > 0) {
      return res.sendApiError({
        title: 'Active Bookings',
        detail: 'Cannot delete rental with active booking!',
      });
    }

    await rental.remove();
    return res.json({ id: rentalId });
  } catch (error) {
    return res.mongoError(error);
  }
};

module.exports = {
  query,
  getById,
  getByUser,
  add,
  remove,
};
