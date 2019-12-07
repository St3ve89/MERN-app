const express = require('express');

const router = express.Router();

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484445,
      lng: -73.9878531
    },
    creator: 'u1'
  }
];

router.get('/:pid', (req, res, next) => {
  const placeId = req.params.pid;
  const place = DUMMY_PLACES.find(p => p.id === placeId);

  if (!place) {
    const error = new Error('Could not find a place for the provided id.');
    error.code = 404;
    throw error;
  }

  res.json({ success: true, data: place });
});

router.get('/user/:uid', (req, res, next) => {
  const userId = req.params.uid;
  const place = DUMMY_PLACES.find(p => p.creator === userId);

  if (!place) {
    const error = new Error('Could not find a place for the provided user id.');
    error.code = 404;
    return next(error);
  }

  res.json({ success: true, data: place });
});

module.exports = router;
