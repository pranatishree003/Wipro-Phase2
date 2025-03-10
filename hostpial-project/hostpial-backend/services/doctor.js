const pool = require('../config/db');

const getAllDoctors = async (query) => {
  try {
    let sql = 'SELECT * FROM doctor';
    const values = [];
    const conditions = [];

    for (const key in query) {
      conditions.push(`${key} = ?`);
      values.push(query[key]);
    }

    if (conditions.length > 0) {
      sql += ` WHERE ` + conditions.join(' AND ');
    }
    console.log(17, sql);
    const [rows] = await pool.query(sql, values);
    return rows;
  } catch (error) {
    console.error('Error fetching doctors:', error);
    throw error;
  }
};

const getDoctorById = async (doctorId) => {
  try {
    const [rows] = await pool.query(
      'SELECT * FROM doctor WHERE doctor_id = ?',
      [doctorId]
    );
    return rows[0];
  } catch (error) {
    console.error('Error fetching doctor:', error);
    throw error;
  }
};
const addDoctor = async (doctor) => {
  try {
    const [rows] = await pool.query(
      'INSERT INTO doctor (doctor_name, speciality, qualification, doctor_username, doctor_password,email, mobile ) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [
        doctor.doctor_name,
        doctor.speciality,
        doctor.qualification,
        doctor.doctor_username,
        doctor.password,
        doctor.email,
        doctor.mobile,
      ]
    );
    return rows;
  } catch (error) {
    console.error('Error adding doctor:', error);
    throw error;
  }
};

module.exports = { getAllDoctors, getDoctorById, addDoctor };
