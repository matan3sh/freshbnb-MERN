const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/user');

const secret = config.get('jwtSecret');

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.headers.authorization;

  // Check if not token
  if (!token)
    _authError(
      res,
      'Invalid Token',
      'Cannot get access, please authorized!',
      401
    );

  const decodedToken = _parseToken(token);
  if (!decodedToken)
    _authError(res, 'Invalid Token', 'Token is malformed!', 401);
  User.findById(decodedToken.sub, (error, foundUser) => {
    if (error) _authError(res, 'DB Error', 'Ooops, something was wrong!', 422);
    if (foundUser) {
      res.locals.user = foundUser;
      next();
    } else
      _authError(
        res,
        'Invalid Token',
        'Cannot get access, please authorized!',
        401
      );
  });
};

_parseToken = (token) => {
  try {
    return jwt.verify(token.split(' ')[1], secret);
  } catch (error) {
    return null;
  }
};

_authError = (res, title, detail, status) =>
  res.status(status).send({
    errors: [{ title, detail }],
  });
