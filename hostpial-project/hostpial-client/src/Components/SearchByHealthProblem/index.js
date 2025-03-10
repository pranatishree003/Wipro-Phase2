import React, { useState } from 'react';
import axios from 'axios';

const SearchByHealthProblem = () => {
  const [healthProblem, setHealthProblem] = useState('');
  const [patients, setPatients] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!healthProblem) {
      setError('Please enter a health problem.');
      return;
    }

    try {
      const response = await axios.get();
      if (response.data.length === 0) {
        setError('No patients found with this health problem.');
        setPatients([]);
      } else {
        setPatients(response.data);
        setError('');
      }
    } catch (err) {
      setPatients([]);
      setError('Error fetching patients.');
    }
  };

  return (
    <div className='container'>
      <h2 className='title'>Search Patients by Health Problem</h2>

      <div className='search-box'>
        <input
          type='text'
          placeholder='Enter Health Problem'
          value={healthProblem}
          onChange={(e) => setHealthProblem(e.target.value)}
          className='input-field'
        />
        <button onClick={handleSearch} className='search-btn'>
          Search
        </button>
      </div>

      {error && <p className='error-message'>{error}</p>}

      {patients.length > 0 && (
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
              <tr key={patient.patientId}>
                <td>{patient.patientId}</td>
                <td>{patient.patientName}</td>
                <td>{patient.age}</td>
                <td>{patient.healthProblem}</td>
                <td>{patient.doctorId}</td>
                <td>{patient.email}</td>
                <td>{patient.mobileNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SearchByHealthProblem;
