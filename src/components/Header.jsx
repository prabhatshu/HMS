import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gradient-to-br from-black via-black-900 to-gray-900 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold text-indigo-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Hostlix</div>
        <nav className="space-x-9 hidden md:flex text-lg">
          <Link to="/" className="text-white hover:text-gray-400">Home</Link>
          <Link to="/students" className="text-white hover:text-gray-400">Students</Link>
          <Link to="/rooms" className="text-white hover:text-gray-400">Rooms</Link>
          <Link to="/payments" className="text-white hover:text-gray-400">Payments</Link>
          <Link to="/contact" className="text-white hover:text-gray-400">Contact</Link>
        </nav>
        <button className="border border-white text-white px-6 py-2 rounded-3xl hover:bg-white hover:text-indigo-700 transition">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
