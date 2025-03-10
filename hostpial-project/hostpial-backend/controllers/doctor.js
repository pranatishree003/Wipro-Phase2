const doctorService = require('../services/doctor');

const getDoctors = async (req, res, next) => {
  try {
    const { query } = req;
    console.log(9, query);

    const doctors = await doctorService.getAllDoctors(query);
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching doctors' });
  }
};

const getDoctor = async (req, res, next) => {
  try {
    const doctor = await doctorService.getDoctorById(req.params.id);
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    res.json(doctor);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching doctor' });
  }
};

const addDoctor = async (req, res, next) => {
  try {
    const doctor = req.body;

    const newDoctor = await doctorService.addDoctor(doctor);
    res.status(201).json(newDoctor);
  } catch (error) {
    res.status(500).json({ message: 'Error adding doctor' });
  }
};

module.exports = { getDoctors, getDoctor, addDoctor };
