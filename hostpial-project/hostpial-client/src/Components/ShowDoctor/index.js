import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ShowDoctor.css';

const ShowDoctor = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [doctorId, setDoctorId] = useState('');
  const [doctorMobileNumber, setDoctorMobileNumber] = useState('');
  const [doctorSpeciality, setDoctorSpeciality] = useState('');

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    axios
      .get('http://localhost:3030/api/doctors')
      .then((response) => {
        setDoctors(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Failed to fetch doctors');
        setLoading(false);
      });
  };

  const handleSearch = () => {
    if (!doctorId && !doctorMobileNumber && !doctorSpeciality) {
      setError('Please enter a valid search criteria');
      return;
    }

    const params = {};

    if (doctorId) {
      params.doctor_id = doctorId;
    }

    if (doctorMobileNumber) {
      params.mobile = doctorMobileNumber;
    }

    if (doctorSpeciality) {
      params.speciality = doctorSpeciality;
    }

    //   doctor_id: doctorId,
    //   mobile: doctorMobileNumber,
    //   speciality: doctorSpeciality,
    // };

    setLoading(true);
    setError(null);

    axios
      .get(`http://localhost:3030/api/doctors`, { params }) // Update API URL if needed
      .then((response) => {
        setDoctors(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Doctor not found');
        setDoctors(null);
        setLoading(false);
      });
  };

  const handleReset = () => {
    if (!doctorId && !doctorMobileNumber && doctorSpeciality) return;

    setDoctorId('');
    setDoctorMobileNumber('');
    setDoctorSpeciality('');

    fetchDoctors();
  };

  if (loading) return <p>Loading doctors...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h2>Doctor List</h2>
      {/* Search Doctor By ID */}
      <div className='search-container'>
        <h2 className='search-title'>Search Doctor</h2>
        <form onSubmit={handleSearch} className='search-form'>
          <input
            type='number'
            placeholder='Enter Doctor ID'
            value={doctorId}
            onChange={(e) => setDoctorId(e.target.value)}
            className='search-input'
          />

          <input
            type='text'
            placeholder='Enter Mobile Number'
            value={doctorMobileNumber}
            onChange={(e) => setDoctorMobileNumber(e.target.value)}
            className='search-input'
          />

          <input
            type='text'
            placeholder='Enter Speciality'
            value={doctorSpeciality}
            onChange={(e) => setDoctorSpeciality(e.target.value)}
            className='search-input'
          />

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
            <tr key={doctor.doctor_id}>
              <td>{doctor.doctor_id}</td>
              <td>{doctor.doctor_name}</td>
              <td>{doctor.speciality}</td>
              <td>{doctor.qualification}</td>
              <td>{doctor.email}</td>
              <td>{doctor.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ShowDoctor;
