const express = require('express');
const router = express.Router();
const { getDoctor, getDoctors, addDoctor } = require('../controllers/doctor');

router.post('/', addDoctor);
router.get('/', getDoctors);
router.get('/:id', getDoctor);

module.exports = router;
