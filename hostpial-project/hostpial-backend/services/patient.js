const pool = require('../config/db');

const getAllPatients = async (query) => {
  try {
    let sql = 'SELECT * FROM patient';
    const values = [];
    const conditions = [];

    for (const key in query) {
      conditions.push(`${key} = ?`);
      values.push(query[key]);
    }

    if (conditions.length > 0) {
      sql += ` WHERE ` + conditions.join(' AND ');
    }

    const [rows] = await pool.query(sql, values);
    return rows;
  } catch (error) {
    console.error('Error fetching doctors:', error);
    throw error;
  }
};

const getPatientById = async (patientId) => {
  try {
    const [rows] = await pool.query(
      'SELECT * FROM patient WHERE patient_id = ?',
      [patientId]
    );
    return rows[0];
  } catch (error) {
    console.error('Error fetching patient:', error);
    throw error;
  }
};
const addPatient = async (patient) => {
  try {
    const [rows] = await pool.query(
      'INSERT INTO patient (patient_name, health_problem, doctor_id, email, mobile_no, age) VALUES (?, ?, ?, ?, ?, ?)',
      [
        patient.patient_name,
        patient.health_problem,
        patient.doctor_id,
        patient.email,
        patient.mobile_no,
        patient.age,
      ]
    );
    return rows;
  } catch (error) {
    console.error('Error adding patient:', error);
    throw error;
  }
};

module.exports = { getAllPatients, getPatientById, addPatient };
