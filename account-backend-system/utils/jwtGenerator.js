const jwt = require('jsonwebtoken');
const config = require('config');
require('dotenv').config();

function jwtGenerator(obj) {
  const object = { obj };
  return jwt.sign(object, config.get('jwtSecret'), { expiresIn: '1h' });
}
module.exports = jwtGenerator;
