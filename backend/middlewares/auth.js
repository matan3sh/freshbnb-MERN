const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/user');

const secret = config.get('jwtSecret');

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.headers.authorization;

  // Check if not token
  if (!token)
    _authError(res, 'Invalid Token', 'Cannot get access, please authorized!');

  const decodedToken = _parseToken(token);
  if (!decodedToken) _authError(res, 'Invalid Token', 'Token is malformed!');
  User.findById(decodedToken.sub, (error, foundUser) => {
    if (error) res.mongoError(error);
    if (foundUser) {
      res.locals.user = foundUser;
      next();
    } else
      _authError(res, 'Invalid Token', 'Cannot get access, please authorized!');
  });
};

_parseToken = (token) => {
  try {
    return jwt.verify(token.split(' ')[1], secret);
  } catch (error) {
    return null;
  }
};

_authError = (res, title, detail, status = 401) =>
  res.status(status).send({
    errors: [{ title, detail }],
  });
