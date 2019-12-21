const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const placesRouters = require('./routes/places-routes');
const usersRouters = require('./routes/users-routes');
const HttpError = require('./models/http-error');

// Load env variables
dotenv.config({ path: './config/config.env' });

const app = express();

app.use(bodyParser.json());

app.use('/api/places/', placesRouters);
app.use('/api/users/', usersRouters);

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }

  res.status(error.code || 500);
  res.json({ success: error.message || 'An unknown error occured!' });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(5000, () => {
      console.log('App listening on port 5000!');
    });
  })
  .catch(err => console.log(err));
