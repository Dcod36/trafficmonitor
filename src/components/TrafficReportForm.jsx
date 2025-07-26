import React, { useState } from 'react';
import axios from 'axios';

const TrafficReportForm = () => {
  const [formData, setFormData] = useState({
    location: '',
    name: '',
    email: '',
    cause: '',
    duration: '',
    description: ''  // ✅ New field
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/report-traffic', formData);
      setSuccessMessage(response.data.message);
      setErrorMessage('');
      setFormData({
        location: '',
        name: '',
        email: '',
        cause: '',
        duration: '',
        description: ''  // Reset description
      });
    } catch (error) {
      console.error('Error submitting report:', error);
      setErrorMessage(error.response?.data?.error || 'Something went wrong');
      setSuccessMessage('');
    }
  };

  return (
    <div>
      <h2>Report Traffic Block</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Location:</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} required />
        </div>
        <div>
          <label>Your Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Your Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Cause of Block (e.g., accident):</label>
          <input type="text" name="cause" value={formData.cause} onChange={handleChange} />
        </div>
        <div>
          <label>Estimated Duration (e.g., 30 mins):</label>
          <input type="text" name="duration" value={formData.duration} onChange={handleChange} />
        </div>
        <div>
          <label>Description:</label> {/* ✅ New field */}
          <textarea name="description" value={formData.description} onChange={handleChange} />
        </div>
        <button type="submit">Submit Report</button>
      </form>

      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default TrafficReportForm;
