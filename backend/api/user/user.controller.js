const userService = require('./user.service');

registerUser = async (req, res) => await userService.register(req.body, res);

loginUser = async (req, res) => await userService.login(req.body, res);

module.exports = {
  loginUser,
  registerUser,
};
