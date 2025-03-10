import React, { useState } from 'react';
import axios from 'axios';

const SearchByPatientId = () => {
  const [patientId, setPatientId] = useState('');
  const [patient, setPatient] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!patientId) {
      setError('Please enter a Patient ID.');
      return;
    }

    try {
      const response = await axios.get();
      setPatient(response.data);
      setError('');
    } catch (err) {
      setPatient(null);
      setError('No patient found with this ID.');
    }
  };

  return (
    <div className='container'>
      <h2 className='title'>Search Patient by ID</h2>

      <div className='search-box'>
        <input
          type='number'
          placeholder='Enter Patient ID'
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
          className='input-field'
        />
        <button onClick={handleSearch} className='search-btn'>
          Search
        </button>
      </div>

      {error && <p className='error-message'>{error}</p>}

      {patient && (
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
            <tr>
              <td>{patient.patientId}</td>
              <td>{patient.patientName}</td>
              <td>{patient.age}</td>
              <td>{patient.healthProblem}</td>
              <td>{patient.doctorId}</td>
              <td>{patient.email}</td>
              <td>{patient.mobileNo}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SearchByPatientId;
