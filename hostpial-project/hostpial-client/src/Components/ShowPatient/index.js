import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config/constant';

const ShowPatient = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [patientId, setPatientId] = useState('');
  const [doctorId, setDoctorId] = useState('');
  const [healthProblem, setHealthProblem] = useState('');

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await axios.get(`${config.API_URL}/patients`);
      setPatients(response.data);
    } catch (err) {
      setError('Failed to fetch patients. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    if (!patientId && !doctorId && !healthProblem) return;

    setDoctorId('');
    setPatientId('');
    setHealthProblem('');

    fetchPatients();
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!patientId && !doctorId && !healthProblem) {
      setError('Please enter a valid search criteria');
      return;
    }

    const params = {};

    if (patientId) {
      params.patient_id = patientId;
    }

    if (doctorId) {
      params.doctor_id = doctorId;
    }

    if (healthProblem) {
      params.health_problem = healthProblem;
    }

    setLoading(true);
    setError('');

    try {
      const response = await axios.get(`${config.API_URL}/patients`, {
        params,
      });
      setPatients(response.data);
    } catch (err) {
      setError('Failed to fetch patients. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading patients...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className='container'>
      <h2 className='title'>All Patients</h2>
      <div className='search-container'>
        <h2 className='search-title'>Search Doctor</h2>
        <form onSubmit={handleSearch} className='search-form'>
          <input
            type='number'
            placeholder='Enter Patient ID'
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
            className='search-input'
          />

          <input
            type='text'
            placeholder='Search By Doctor ID'
            value={doctorId}
            onChange={(e) => setDoctorId(e.target.value)}
            className='search-input'
          />

          {/* <input
            type='text'
            placeholder='Search By Health Problem'
            value={healthProblem}
            onChange={(e) => setHealthProblem(e.target.value)}
            className='search-input'
          /> */}

          <select
            value={healthProblem}
            onChange={(e) => setHealthProblem(e.target.value)}
            className='search-input'
          >
            <option value=''>Select Health Problem</option>
            {config.healthProblem.map((problem) => (
              <option key={problem.value} value={problem.value}>
                {problem.name}
              </option>
            ))}
          </select>

          <div className='button-group'>
            <button type='submit' className='search-button'>
              Search
            </button>
            <button
              type='button'
              onClick={handleReset}
              className='reset-button'
            >
              Reset
            </button>
          </div>
        </form>
      </div>

      {patients.length > 0 ? (
        <table border='1' cellPadding='10'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Health Problem</th>
              <th>Doctor ID</th>
              <th>Email</th>
              <th>Mobile No</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.patient_id}>
                <td>{patient.patient_id}</td>
                <td>{patient.patient_name}</td>
                <td>{patient.age}</td>
                <td>{patient.health_problem}</td>
                <td>{patient.doctor_id}</td>
                <td>{patient.email}</td>
                <td>{patient.mobile_no}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !loading && <p>No patients found.</p>
      )}
    </div>
  );
};

export default ShowPatient;
