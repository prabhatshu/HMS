import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Header from './components/Header';
import Signup from './pages/SignUp'; 
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
