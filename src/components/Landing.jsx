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
  <span className="text-3xl font-bold text-white">Trusted by Hostel Admins & Students</span>
  <div className="grid md:grid-cols-3 gap-10 mt-10">
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
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
  <div className="bg-white/10 text-white p-6 rounded-xl shadow-md">
    <p>"Hostlix makes hostel life easier! I can check payments, raise complaints, and update my profile without running around."</p>
    <p className="mt-4 text-sm font-semibold text-indigo-400">— Priya, 2nd Year Student</p>
  </div>
  <div className="bg-white/10 text-white p-6 rounded-xl shadow-md">
    <p>"Super simple to use and way better than paper forms. I raised a maintenance request and it got resolved in a day!"</p>
    <p className="mt-4 text-sm font-semibold text-indigo-400">— Kunal, Final Year Student</p>
  </div>
  <div className="bg-white/10 text-white p-6 rounded-xl shadow-md">
    <p>"Finally, a proper portal to manage everything hostel-related. The reminders for fee deadlines are a lifesaver."</p>
    <p className="mt-4 text-sm font-semibold text-indigo-400">— Aanya, 1st Year Student</p>
  </div>
</div>

</section>

<footer className=" text-gray-300 px-6  border-t py-10 mt-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

    <div>
      <h3 className="text-xl font-semibold text-white mb-3">Hostlix</h3>
      <p>Simplifying hostel management for institutions across the country. From room allocation to student support — everything in one place.</p>
    </div>

    <div>
      <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
      <ul className="space-y-2 text-sm">
        <li>Email: <a href="mailto:support@hostlix.com" className="text-indigo-400 hover:underline">support@hostlix.com</a></li>
        <li>Phone: <a href="tel:+919999999999" className="text-indigo-400 hover:underline">+91 99999 99999</a></li>
        <li>Support Hours: 9:00 AM – 6:00 PM</li>
      </ul>
    </div>

    <div>
      <h3 className="text-lg font-semibold text-white mb-3">Registered College</h3>
      <ul className="space-y-2 text-sm">
        <li>ABES Engineering College</li>
        <li>Ghaziabad, Uttar Pradesh, India</li>
        <li>Affiliated to AKTU</li>
        <li>College Code: 032</li>
      </ul>
    </div>

    <div>
      <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#home" className="hover:text-indigo-400">Home</a></li>
        <li><a href="#features" className="hover:text-indigo-400">Features</a></li>
        <li><a href="#students" className="hover:text-indigo-400">Students</a></li>
        <li><a href="#rooms" className="hover:text-indigo-400">Rooms</a></li>
        <li><a href="#payments" className="hover:text-indigo-400">Payments</a></li>
        <li><a href="#contact" className="hover:text-indigo-400">Contact</a></li>
      </ul>
    </div>
  </div>


























  {/* <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm flex flex-col md:flex-row justify-between items-center">
    <p className="mb-3 md:mb-0">&copy; {new Date().getFullYear()} Hostlix. All rights reserved.</p>
    <div className="space-x-4">
      <a href="#" className="hover:text-indigo-400">Privacy Policy</a>
      <a href="#" className="hover:text-indigo-400">Terms of Service</a>
      <a href="#" className="hover:text-indigo-400">GitHub</a>
    </div>
  </div> */}
</footer>

    </div>
  );
};

export default Landing;
