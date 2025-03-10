import React, { useState } from 'react';
import axios from 'axios';

const SearchBySpecialization = () => {
  const [specialization, setSpecialization] = useState('');
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    if (!specialization) {
      setError('Please select a specialization');
      return;
    }

    setLoading(true);
    setError(null);

    axios
      .get() // Update API URL if needed
      .then((response) => {
        setDoctors(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('No doctors found for this specialization');
        setDoctors([]);
        setLoading(false);
      });
  };

  return (
    <div>
      <h2>Search Doctor by Specialization</h2>
      <select
        value={specialization}
        onChange={(e) => setSpecialization(e.target.value)}
      >
        <option value=''>Select Specialization</option>
        <option value='CARDIO'>Cardio</option>
        <option value='KIDNEY'>Kidney</option>
        <option value='LIVER'>Liver</option>
        <option value='GENERAL'>General</option>
        <option value='ENT'>ENT</option>
      </select>
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {doctors.length > 0 && (
        <table border='1' cellPadding='10'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Specialization</th>
              <th>Qualification</th>
              <th>Email</th>
              <th>Mobile</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr key={doctor.doctorId}>
                <td>{doctor.doctorId}</td>
                <td>{doctor.doctorName}</td>
                <td>{doctor.speciality}</td>
                <td>{doctor.qualification}</td>
                <td>{doctor.email}</td>
                <td>{doctor.mobile}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SearchBySpecialization;
