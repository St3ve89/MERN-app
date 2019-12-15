const uuid = require('uuid/v4');
const HttpError = require('../models/http-error');

const DUMMY_USERS = [
  {
    id: 'u1',
    name: 'Istvan Acs',
    email: 'test@test.com',
    password: 'tester'
  }
];

exports.getUsers = (req, res, next) => {
  res.json({ success: true, users: DUMMY_USERS });
};

exports.signup = (req, res, next) => {
  const { name, email, password } = req.body;

  const hasUser = DUMMY_USERS.find(u => u.email === email);

  if (hasUser) {
    throw new HttpError('Could not create user, email already exist.', 422);
  }

  const createdUser = {
    id: uuid(),
    name,
    email,
    password
  };

  DUMMY_USERS.push(createdUser);

  res.status(201).json({ user: createdUser });
};

exports.login = (req, res, next) => {
  const { email, password } = req.body;

  const identifiedUser = DUMMY_USERS.find(u => u.email === email);
  if (!identifiedUser || identifiedUser.password !== password) {
    throw new HttpError(
      'Could not identify user, credentials seem to be wrong.',
      401
    );
  }

  res.json({ success: true, message: 'Logged in!' });
};
