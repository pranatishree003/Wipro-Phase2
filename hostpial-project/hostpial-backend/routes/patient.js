const express = require('express');
const router = express.Router();
const {
  getPatient,
  getPatients,
  addPatient,
} = require('../controllers/patient');

// router.post('/', addPatient);
// router.get('/', getPatients);
router.route('/').get(getPatients).post(addPatient);
router.get('/:id', getPatient);

module.exports = router;
