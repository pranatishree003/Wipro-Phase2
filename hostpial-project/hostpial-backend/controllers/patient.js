const patientService = require('../services/patient');

const getPatients = async (req, res, next) => {
  try {
    const { query } = req;
    const patients = await patientService.getAllPatients(query);
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching doctors' });
  }
};

const getPatient = async (req, res, next) => {
  try {
    const patient = await patientService.getPatientById(req.params.id);
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.json(patient);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching doctor' });
  }
};
const addPatient = async (req, res, next) => {
  try {
    const patient = req.body;

    const newPatient = await patientService.addPatient(patient);
    res.status(201).json(newPatient);
  } catch (error) {
    res.status(500).json({ message: 'Error adding patient' });
  }
};

module.exports = { getPatient, getPatients, addPatient };
