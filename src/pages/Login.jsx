import React, { useState } from 'react';
import './AuthPage.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    collegeId: '',
    password: '',
    confirmPassword: '',
  });

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ fullName: '', collegeId: '', password: '', confirmPassword: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? '/api/login' : '/api/signup';

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token);
        alert(`${isLogin ? 'Logged in' : 'Signed up'} successfully!`);
     
      } else {
        alert(data.message || 'Something went wrong!');
      }
    } catch (err) {
      console.error(err);
      alert('Server error!');
    }
  };

  return (
    <div className="auth-container">
      <div className={`form-box ${isLogin ? 'slide-left' : 'slide-right'}`}>
        <h2>{isLogin ? 'Log In to Hostlix' : 'Sign Up for Hostlix'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          )}
          
          <input
            type="text"
            name="collegeId"
            placeholder="College ID"
            value={formData.collegeId}
            onChange={handleChange}
            required
          />
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {!isLogin && (
            <input

              type={showPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          )}
          <label className="checkbox-label">
            <input type="checkbox" onChange={() => setShowPassword(!showPassword)} />
            Show Password
          </label>
          {isLogin && <p className="forgot-link">Forgot Password?</p>}
          <button type="submit">{isLogin ? 'Log In' : 'Sign Up'}</button>
        </form>
        <p className="toggle" onClick={toggleForm}>
          {isLogin
            ? "Don't have an account? Sign up"
            : 'Already have an account? Log in'}
        </p>
      </div>
    </div>
  );
};

export default Login;
