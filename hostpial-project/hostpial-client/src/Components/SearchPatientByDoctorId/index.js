import React, { useState } from 'react';
import axios from 'axios';

const SearchPatientByDoctorId = () => {
  const [doctorId, setDoctorId] = useState('');
  const [patients, setPatients] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!doctorId) {
      setError('Please enter a Doctor ID.');
      return;
    }

    try {
      const response = await axios.get();
      if (response.data.length === 0) {
        setError('No patients found for this Doctor ID.');
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
      <h2 className='title'>Search Patients by Doctor ID</h2>

      <div className='search-box'>
        <input
          type='number'
          placeholder='Enter Doctor ID'
          value={doctorId}
          onChange={(e) => setDoctorId(e.target.value)}
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

export default SearchPatientByDoctorId;
