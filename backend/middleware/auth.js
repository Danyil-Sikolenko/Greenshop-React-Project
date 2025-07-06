const users = require('../usersStore');

function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Missing token' });
  }

  const token = authHeader.split(' ')[1];
  const user = users.find(u => String(u.id) === token);
  if (!user) {
    return res.status(403).json({ message: 'Invalid token' });
  }

  req.user = user;
  next();
}

module.exports = authenticate;