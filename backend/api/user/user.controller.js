const userService = require('./user.service');

login = async (req, res) => {
  return res.json({ message: 'User Login' });
};

register = async (req, res) => {
  return res.json({ message: 'User Register' });
};

getUsers = async (req, res) => await userService.query(res);

getUser = async (req, res) => await userService.getById(req.params.id, res);

addUser = async (req, res) => await userService.add(req.body, res);

updateUser = async (req, res) => {
  const user = req.body;
  await userService.update(user);
  res.send(user);
};

deleteUser = async (req, res) => {
  await userService.remove(req.params.id);
  res.end();
};

module.exports = {
  login,
  register,
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
};
