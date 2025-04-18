import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="bg-gradient-to-br from-black via-black-900 to-gray-900 text-black min-h-screen">
<section
  className="relative h-screen flex flex-col justify-center items-center text-white text-center px-6 pt-20 bg-cover bg-center"
  style={{ backgroundImage: `url('/h4.jpg')` }}
>

  <div className="absolute inset-0 bg-black/70 z-0"></div>

  <div className="relative z-10 max-w-3xl text-white">
    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
      Welcome to <span className="text-indigo-300">Hostlix</span>
    </h1>
    <p className="text-xl md:text-2xl font-medium mb-6 drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)] italic">
      The Smart Way to Manage Your Hostel Life.
    </p>
    <p className="text-base md:text-lg mb-10 opacity-90">
      Streamline your student records, room allocations, complaints, and payments in one seamless platform — simple, secure, and scalable.
    </p>
    <div className="space-x-4">
      <Link to="/students">
        <button className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold hover:bg-indigo-100 transition">
          Get Started
        </button>
      </Link>
      <Link to="/contact">
        <button className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-700 transition">
          Contact Us
        </button>
      </Link>
    </div>
  </div>

  <div className="absolute bottom-10 animate-bounce text-xl z-10">↓</div>
</section>

<section className=" text-white py-20 px-6 ">

        <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
        <div className="grid md:grid-cols-3 gap-10  max-w-6xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-xl transition border border-white/20">
        <h3 className="text-xl font-semibold mb-3 text-indigo-700"> Room Management</h3>
            <p>
              Easily allocate, track, and update room status. Ensure efficient space utilization and avoid overbooking.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-xl transition border border-white/20">
          <h3 className="text-xl font-semibold mb-3 text-pink-600"> Student Records</h3>
            <p>
              Maintain comprehensive profiles including personal info, room details, and guardian contact for all students.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-xl transition border border-white/20">
          <h3 className="text-xl font-semibold mb-3 text-purple-700"> Payments</h3>
            <p>
              Track fees, due dates, and payment statuses. Generate invoices and send reminders automatically.
            </p>
          </div>
        </div>

      
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mt-12 mx-auto">
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-xl transition border border-white/20">
      <h3 className="text-xl font-semibold mb-3 text-green-700">Complaints & Maintenance</h3>
            <p>
              Students can raise maintenance requests with ease. Admins can monitor and resolve issues on time.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-xl transition border border-white/20">
            <h3 className="text-xl font-semibold mb-3 text-yellow-600">🧑‍💼 Staff Management</h3>
            <p>
              Track staff duties, work hours, and performance. Assign wardens to blocks and ensure hostel security.
            </p>
          </div>
        </div>
      </section>
      <section className=" text-white py-20 px-6 ">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-white mb-6">Why Choose Hostlix?</h2>
    <p className="text-gray-300 mb-12">
      Our platform is built to simplify hostel management, whether you're managing a few rooms or hundreds.
      It's intuitive, secure, and highly customizable to suit your unique needs.
    </p>
    <div className="grid md:grid-cols-3 gap-10 text-left">
      <div>
        <h4 className="font-semibold text-purple-500 mb-1">✅ Easy to Use</h4>
        <p className="text-sm text-gray-300">No steep learning curve — get started in minutes.</p>
      </div>
      <div>
        <h4 className="font-semibold text-indigo-400 mb-1">✅ 24x7 Access</h4>
        <p className="text-sm text-gray-300">Check details and manage hostel from any device, anywhere.</p>
      </div>
      <div>
        <h4 className="font-semibold text-pink-400 mb-1">✅ Centralized System</h4>
        <p className="text-sm text-gray-300">All student and staff data managed from one platform.</p>
      </div>
    </div>
  </div>
</section>

<section className=" text-white py-20 px-6 border-t border-white/10">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-12">Trusted by Hostel Admins</h2>
    <div className="grid md:grid-cols-3 gap-10">
      <div className="bg-white/10 p-6 rounded-xl shadow-lg">
        <p className="italic text-sm">"Managing our 300+ student hostel has never been easier. Hostlix is truly a game-changer!"</p>
        <h4 className="mt-4 font-bold text-indigo-400">— Mr. Sharma, Warden</h4>
      </div>
      <div className="bg-white/10 p-6 rounded-xl shadow-lg">
        <p className="italic text-sm">"I can track all complaints and fees in one place. No more spreadsheets!"</p>
        <h4 className="mt-4 font-bold text-pink-400">— Richa, Admin Officer</h4>
      </div>
      <div className="bg-white/10 p-6 rounded-xl shadow-lg">
        <p className="italic text-sm">"Smooth interface, great support, and very affordable."</p>
        <h4 className="mt-4 font-bold text-green-400">— Aarav, IT Team</h4>
      </div>
    </div>
  </div>
</section>


      {/* { <footer className="text-center text-white text-sm py-6 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700">
        &copy; {new Date().getFullYear()} Hostel Manager. Crafted with 💜 by Team.
      </footer> } */}
    </div>
  );
};

export default Landing;
