const Rental = require('../../models/rental');

query = async (res) => {
  try {
    await Rental.find({}, (error, foundRentals) => res.json(foundRentals));
  } catch (err) {
    console.log('Error cannot fetch rentals');
    res.json({
      errors: [
        {
          title: 'Rental Error',
          message: 'Cannot retrive rentals data!',
        },
      ],
    });
  }
};

getById = async (id, res) => {
  try {
    await Rental.findById(id, (error, foundRental) => res.json(foundRental));
  } catch (err) {
    console.log(`Error While fetching rental with id of ${id}`);
    res.json({
      errors: [
        {
          title: 'Rental Error',
          message: 'Cannot retrive rentals data!',
        },
      ],
    });
  }
};

add = async (rental, res) => {
  try {
    await Rental.create(rental, (error, createdRental) =>
      res.json(createdRental)
    );
  } catch (err) {
    console.log(`Error While adding rental`);
    return res.json({
      errors: [
        {
          title: 'Rental Error',
          message: `Rental ${rental.title} can't be added`,
        },
      ],
    });
  }
};

module.exports = {
  query,
  getById,
  add,
};
