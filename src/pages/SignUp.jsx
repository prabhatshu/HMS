import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    collegeId: '',
    role: '',
    collegeName: '',
    year: '',
    branch: '',
    courseName: '',
    hostelName: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', formData);
      alert(response.data.message);
    } catch (error) {
      alert(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="collegeId" placeholder="College ID" onChange={handleChange} required />
      <input name="role" placeholder="Role (warden/student/admin)" onChange={handleChange} required />
      <input name="collegeName" placeholder="College Name" onChange={handleChange} required />
      <input name="year" placeholder="Year" onChange={handleChange} required />
      <input name="branch" placeholder="Branch" onChange={handleChange} required />
      <input name="courseName" placeholder="Course Name" onChange={handleChange} required />
      <input name="hostelName" placeholder="Hostel Name" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
