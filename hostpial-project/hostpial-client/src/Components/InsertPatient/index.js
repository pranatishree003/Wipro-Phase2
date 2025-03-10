import React, { useState } from 'react';
import axios from 'axios';
import config from '../../config/constant';
import './InsertPatient.css'; // Import CSS

const blankPatient = {
  patientName: '',
  age: '',
  healthProblem: '',
  doctorId: '',
  email: '',
  mobileNo: '',
};

const InsertPatient = () => {
  const [formData, setFormData] = useState(blankPatient);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ text: '', type: '' });

    try {
      const response = await axios.post(`${config.API_URL}/patients`, {
        ...formData,
        patient_name: formData.patientName,
        health_problem: formData.healthProblem,
        doctor_id: parseInt(formData.doctorId),
        mobile_no: formData.mobileNo,
        age: parseInt(formData.age),
      });

      if (response.status === 201) {
        setMessage({ text: 'Patient added successfully!', type: 'success' });
        setFormData(blankPatient);
      } else {
        setMessage({
          text: 'Error adding patient. Please try again.',
          type: 'error',
        });
      }
    } catch (error) {
      setMessage({
        text: 'Error adding patient. Please try again.',
        type: 'error',
      });
    }
  };

  return (
    <div className='form-container'>
      <h2 className='form-title'>Add a New Patient</h2>

      {message.text && (
        <p className={`message ${message.type}`}>{message.text}</p>
      )}

      <form onSubmit={handleSubmit} className='patient-form'>
        <input
          type='text'
          name='patientName'
          placeholder='Patient Name'
          value={formData.patientName}
          onChange={handleChange}
          required
        />

        <input
          type='number'
          name='age'
          placeholder='Age'
          value={formData.age}
          onChange={handleChange}
          required
        />

        <select
          name='healthProblem'
          value={formData.healthProblem}
          onChange={handleChange}
          required
        >
          <option value=''>Select Health Problem</option>
          {config.healthProblem.map((problem) => (
            <option key={problem.value} value={problem.value}>
              {problem.name}
            </option>
          ))}
        </select>

        <input
          type='number'
          name='doctorId'
          placeholder='Assigned Doctor ID'
          value={formData.doctorId}
          onChange={handleChange}
          required
        />

        <input
          type='email'
          name='email'
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type='text'
          name='mobileNo'
          placeholder='Mobile No'
          value={formData.mobileNo}
          onChange={handleChange}
          required
        />

        <button type='submit' className='submit-button'>
          Add Patient
        </button>
      </form>
    </div>
  );
};

export default InsertPatient;
