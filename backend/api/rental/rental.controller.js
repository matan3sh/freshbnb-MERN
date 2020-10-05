const rentalService = require('./rental.service');

getRentals = async (req, res) => await rentalService.query(req.query.city, res);

getRental = async (req, res) => await rentalService.getById(req.params.id, res);

addRental = async (req, res) => await rentalService.add(req.body, res);

updateRental = async (req, res) => {
  const rental = req.body;
  await rentalService.update(rental);
  res.send(rental);
};

deleteRental = async (req, res) => {
  await rentalService.remove(req.params.id);
  res.end();
};

module.exports = {
  getRental,
  getRentals,
  addRental,
  updateRental,
  deleteRental,
};
