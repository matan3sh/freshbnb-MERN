const { rentals, users, images } = require('./data');

const Rental = require('../models/rental');
const User = require('../models/user');
const Booking = require('../models/booking');
const Image = require('../models/image');
const Review = require('../models/review');

class FakeDB {
  async clean() {
    await Image.deleteMany({});
    await Rental.deleteMany({});
    await User.deleteMany({});
    await Booking.deleteMany({});
    await Review.deleteMany({});
  }

  async addData() {
    await Image.create(images);
    await Rental.create(rentals);
    await User.create(users);
  }

  async populate() {
    await this.clean();
    await this.addData();
  }
}

module.exports = FakeDB;
