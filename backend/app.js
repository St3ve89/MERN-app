const express = require('express');
const bodyParser = require('body-parser');

const placesRouters = require('./routes/places-routes');

const app = express();

app.use('/api/places/', placesRouters);

app.listen(5000, () => {
  console.log('App listening on port 5000!');
});
