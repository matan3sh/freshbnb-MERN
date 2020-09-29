const config = require('config');
const User = require('../../models/user');
const jwt = require('jsonwebtoken');

const secret = config.get('jwtSecret');

register = async (userCredentials, res) => {
  const { username, email, password, passwordConfirm } = userCredentials;
  if (!password || !email)
    return res.sendApiError({
      title: 'Missing Data!',
      detail: 'Email or Password is missing!',
    });
  if (password !== passwordConfirm)
    return res.sendApiError({
      title: 'Invalid Password!',
      detail: 'Password is not matching Confirmation Password!',
    });
  User.findOne({ email }, (error, existingUser) => {
    if (error) return res.mongoError(error);
    if (existingUser)
      return res.sendApiError({
        title: 'Invalid Email!',
        detail: 'User with this email already exist!',
      });
  });
  const user = new User({ username, email, password });
  user.save((error) => {
    if (error) return res.mongoError(error);
    return res.json({ status: 'Registered' });
  });
};

login = async (userCredentials, res) => {
  const { email, password } = userCredentials;
  if (!password || !email)
    return res.sendApiError({
      title: 'Missing Data!',
      detail: 'Email or Password is Missing!',
    });
  User.findOne({ email }, (err, foundUser) => {
    if (err) res.mongoError(error);
    if (!foundUser)
      return res.sendApiError({
        title: 'Invalid Email!',
        detail: "User with provided email doesn't exists",
      });
    if (foundUser.hasSamePassword(password)) {
      const token = jwt.sign(
        {
          sub: foundUser._id,
          username: foundUser.username,
          email: foundUser.email,
        },
        secret,
        { expiresIn: '6h' }
      );
      return res.json(token);
    } else
      return res.sendApiError({
        title: 'Invalid Password!',
        detail: 'Provided Password is wrong!',
      });
  });
};

module.exports = {
  register,
  login,
};
