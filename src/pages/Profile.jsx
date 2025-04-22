import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('http://localhost:5000/api/auth/profile', {
          headers: { Authorization: token },
        });
        setUser(response.data);
      } catch (error) {
        alert('Unauthorized or error fetching profile');
      }
    };

    fetchProfile();
  }, []);

  return user ? (
    <div>
      <h2>Welcome, {user.name}</h2>
      <p>Role: {user.role}</p>
      <p>College ID: {user.collegeId}</p>
      <p>Hostel: {user.hostelName}</p>
    </div>
  ) : (
    <p>Loading profile...</p>
  );
};

export default Profile;
