const rentalService = require('./rental.service');

getRentals = async (req, res) => await rentalService.query(req.query.city, res);

getRental = async (req, res) => await rentalService.getById(req.params.id, res);

addRental = async (req, res) => await rentalService.add(req.body, res);

getUserRentals = async (req, res) => await rentalService.getByUser(res);

updateRental = async (req, res) => await rentalService.update(req, res);

deleteRental = async (req, res) =>
  await rentalService.remove(req.params.id, res);

module.exports = {
  getRental,
  getRentals,
  getUserRentals,
  addRental,
  updateRental,
  deleteRental,
};
