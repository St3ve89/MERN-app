const express = require('express');

const {
  getPlaceById,
  getPlaceByUserId,
  createPlace,
  updatePlace,
  deletePlace
} = require('../controllers/places-controllers');

const router = express.Router();

router.get('/:pid', getPlaceById);

router.get('/user/:uid', getPlaceByUserId);

router.post('/', createPlace);

router.patch('/:pid', updatePlace);

router.delete('/:pid', deletePlace);

module.exports = router;
