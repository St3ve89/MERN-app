const express = require('express');
const bodyParser = require('body-parser');

const placesRouters = require('./routes/places-routes');

const app = express();

app.use('/api/places/', placesRouters);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }

  res.status(error.code || 500);
  res.json({ success: error.message || 'An unknown error occured!' });
});

app.listen(5000, () => {
  console.log('App listening on port 5000!');
});
