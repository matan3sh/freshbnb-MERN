const config = require('config');
const User = require('../../models/user');
const jwt = require('jsonwebtoken');

const secret = config.get('jwtSecret');

register = async (userCredentials, res) => {
  const { username, email, password, passwordConfirm } = userCredentials;
  if (!password || !email)
    _handleError(res, 'Missing Data!', 'Email or Password is missing!');
  if (password !== passwordConfirm)
    _handleError(
      res,
      'Invalid Password!',
      'Password is not matching Confirmation Password!'
    );
  User.findOne({ email }, (error, existingUser) => {
    if (error) _handleError(res, 'DB Error!', 'Ooops, something went wrong!');
    if (existingUser)
      _handleError(
        res,
        'Invalid Email!',
        'User with this email already exist!'
      );
  });
  const user = new User({ username, email, password });
  user.save((error) => {
    if (error) _handleError(res, 'DB Error!', 'Ooops, something went wrong!');
    return res.json({ status: 'Registered' });
  });
};

login = async (userCredentials, res) => {
  const { email, password } = userCredentials;
  if (!password || !email)
    _handleError(res, 'Missing Data!', 'Email or Password is missing!');
  User.findOne({ email }, (err, foundUser) => {
    if (err) _handleError(res, 'DB Error!', 'Ooops, something went wrong!');
    if (!foundUser)
      _handleError(
        res,
        "Invalid Email!', 'User with provided email doesn't exists"
      );
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
      _handleError(res, 'Invalid Password!', 'Provided Password is wrong!');
  });
};

_handleError = (res, title, detail) =>
  res.status(422).send({
    errors: [
      {
        title,
        detail,
      },
    ],
  });

module.exports = {
  register,
  login,
};
