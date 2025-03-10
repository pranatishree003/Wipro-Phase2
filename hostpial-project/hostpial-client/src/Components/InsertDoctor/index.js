import React, { useState } from 'react';
import axios from 'axios';
import config from '../../config/constant';
import './InsertDoctor.css'; // Import CSS

const { API_URL } = config;

const blankDoctor = {
  doctorName: '',
  speciality: '',
  qualification: '',
  doctorUserName: '',
  doctorPassword: '',
  email: '',
  mobile: '',
};

const InsertDoctor = () => {
  const [doctor, setDoctor] = useState(blankDoctor);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);

    setDoctor((doctor) => ({ ...doctor, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await axios.post(`${API_URL}/doctors`, {
        ...doctor,
        doctor_name: doctor.doctorName,
        speciality: doctor.speciality,
        doctor_password: doctor.doctorPassword,
        doctor_username: doctor.doctorUserName,
      });

      if (response.status !== 201) {
        throw new Error('Failed to add doctor');
      }

      setMessage('Doctor added successfully!');
      setDoctor(blankDoctor);
    } catch (error) {
      setMessage('Failed to add doctor. Please check the details.');
      console.error('Error:', error);
    }
  };

  return (
    <div className='form-container'>
      <h2 className='form-title'>Add a New Doctor</h2>

      {message && (
        <p
          className={`message ${
            message.includes('successfully') ? 'success' : 'error'
          }`}
        >
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit} className='doctor-form'>
        <input
          type='text'
          name='doctorName'
          placeholder='Doctor Name'
          value={doctor.doctorName}
          onChange={handleChange}
          required
        />

        <select
          name='speciality'
          value={doctor.speciality}
          onChange={handleChange}
          required
        >
          <option value=''>Select Specialization</option>
          {config.healthProblem.map((problem) => (
            <option key={problem.value} value={problem.value}>
              {problem.name}
            </option>
          ))}
        </select>

        <input
          type='text'
          name='qualification'
          placeholder='Qualification'
          value={doctor.qualification}
          onChange={handleChange}
          required
        />
        <input
          type='text'
          name='doctorUserName'
          placeholder='Username'
          value={doctor.doctorUserName}
          onChange={handleChange}
          required
        />
        <input
          type='password'
          name='doctorPassword'
          placeholder='Password'
          value={doctor.doctorPassword}
          onChange={handleChange}
          required
        />
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={doctor.email}
          onChange={handleChange}
          required
        />
        <input
          type='text'
          name='mobile'
          placeholder='Mobile Number'
          value={doctor.mobile}
          onChange={handleChange}
          required
        />

        <button type='submit' className='submit-button'>
          Add Doctor
        </button>
      </form>
    </div>
  );
};

export default InsertDoctor;
